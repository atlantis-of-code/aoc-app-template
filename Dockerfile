# Define a variable for the application name
ARG APP_NAME=app-template

# Base image for building
FROM node:20-alpine AS base
ARG APP_NAME

# Set the working directory
WORKDIR /${APP_NAME}

# Ensure the home directory for the node user is correct
RUN mkdir -p /home/node && npm set progress=false && npm config set depth 0

# Client side compilation
FROM base AS client
ARG configuration=production
ARG APP_NAME
COPY ${APP_NAME}-common /${APP_NAME}/${APP_NAME}-common
COPY ${APP_NAME}-client /${APP_NAME}/${APP_NAME}-client
# Copy .npmrc to the node user's home directory
COPY .npmrc /home/node/.npmrc
RUN chown -R node:node /${APP_NAME} /home/node/.npmrc

# Switch to non-root user
USER node

RUN cd /${APP_NAME}/${APP_NAME}-common && \
    npm ci && \
    cd /${APP_NAME}/${APP_NAME}-client && \
    npm install @atlantis-of-code/aoc-client@latest && \
    npm ci && \
    rm /home/node/.npmrc
RUN cd /${APP_NAME}/${APP_NAME}-common && \
    npm run build && \
    npm prune --omit=dev && \
    cd /${APP_NAME}/${APP_NAME}-client && \
    npm run build:$configuration && \
    npm prune --omit=dev

# Server side compilation
FROM base AS server
ARG APP_NAME
COPY ${APP_NAME}-common /${APP_NAME}/${APP_NAME}-common
COPY ${APP_NAME}-server /${APP_NAME}/${APP_NAME}-server
# Copy .npmrc to the node user's home directory
COPY .npmrc /home/node/.npmrc
RUN chown -R node:node /${APP_NAME} /home/node/.npmrc

# Switch to non-root user
USER node

RUN cd /${APP_NAME}/${APP_NAME}-common && \
    npm ci && \
    cd /${APP_NAME}/${APP_NAME}-server && \
    npm install @atlantis-of-code/aoc-server@latest && \
    npm ci && \
    rm /home/node/.npmrc
RUN cd /${APP_NAME}/${APP_NAME}-common && \
    npm run build && \
    npm prune --omit=dev && \
    cd /${APP_NAME}/${APP_NAME}-server && \
    npm run build && \
    npm prune --omit=dev

# Production image
FROM node:20-alpine AS production
ARG APP_NAME

# Set the working directory
WORKDIR /${APP_NAME}/${APP_NAME}-common
COPY --from=server /${APP_NAME}/${APP_NAME}-common/dist/ ./dist
COPY --from=server /${APP_NAME}/${APP_NAME}-common/package.json ./package.json
COPY --from=server /${APP_NAME}/${APP_NAME}-common/node_modules ./node_modules

WORKDIR /${APP_NAME}/${APP_NAME}-server
COPY --from=server /${APP_NAME}/${APP_NAME}-server/dist/ ./dist
COPY --from=server /${APP_NAME}/${APP_NAME}-server/public/ ./public
COPY --from=server /${APP_NAME}/${APP_NAME}-server/package.json ./package.json
COPY --from=server /${APP_NAME}/${APP_NAME}-server/node_modules ./node_modules
COPY --from=server /${APP_NAME}/${APP_NAME}-server/aoc-server-config.json ./aoc-server-config.json

COPY --from=client /${APP_NAME}/${APP_NAME}-client/dist/${APP_NAME}-client/es/. ./public/

EXPOSE 3000

ENV NODE_ENV production
ENV NPM_CONFIG_LOGLEVEL warn

USER node

ENTRYPOINT ["npm", "run", "start"]
