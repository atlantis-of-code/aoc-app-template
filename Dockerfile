# Base image for building
FROM node:20-alpine AS base

# Set the working directory
WORKDIR /app

# Ensure the home directory for the node user is correct
RUN mkdir -p /home/node

# Client side compilation
FROM base AS client
ARG configuration=production
COPY app-client/package*.json /app/app-client/
# Copy .npmrc to the node user's home directory
COPY .npmrc /home/node/.npmrc
RUN chown -R node:node /app /home/node/.npmrc

# Switch to non-root user
USER node

RUN cd /app/app-client && \
    npm install @atlantis-of-code/aoc-client@latest && \
    npm ci && \
    rm /home/node/.npmrc
COPY app-client /app/app-client
RUN cd /app/app-client && \
    npx npm run build:$configuration

# Server side compilation
FROM base AS server
COPY app-server/package*.json /app/app-server/
# Copy .npmrc to the node user's home directory
COPY .npmrc /home/node/.npmrc
RUN chown -R node:node /app /home/node/.npmrc

# Switch to non-root user
USER node

RUN cd /app/app-server && \
    npm install @atlantis-of-code/aoc-server@latest && \
    npm ci && \
    rm /home/node/.npmrc
COPY app-server /app/app-server
RUN cd /app/app-server && \
    npm run build && \
    npm prune --omit=dev

# Production image
FROM node:20-alpine AS production

# Set the working directory
WORKDIR /app/app-server

COPY --from=server /app/app-server/dist/ ./dist
COPY --from=server /app/app-server/public/ ./public
COPY --from=server /app/app-server/package.json ./package.json
COPY --from=server /app/app-server/node_modules ./node_modules
COPY --from=server /app/app-server/aoc-server-config.json ./aoc-server-config.json

COPY --from=client /app/app-client/dist/app-client/es/. ./public/

RUN chown -R node:node /app

EXPOSE 3000

ENV NODE_ENV production
ENV NPM_CONFIG_LOGLEVEL warn

USER node

ENTRYPOINT ["npm", "run", "start"]
