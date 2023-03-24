import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AocRestOptions } from '@atlantis-of-code/aoc-client/aoc-common';
import { AocFormController, AocFormModule } from '@atlantis-of-code/aoc-client/components/aoc-form';
import { AocFormGroupType } from '@atlantis-of-code/aoc-client/core/types';
import { AocUiButtonModule } from '@atlantis-of-code/aoc-client/ui/button/aoc-ui-button';
import { AocUiFormModule } from '@atlantis-of-code/aoc-client/ui/form/aoc-ui-form';
import { AocUiInputGroupModule } from '@atlantis-of-code/aoc-client/ui/form/aoc-ui-input-group';
import { AocUiInputTextModule } from '@atlantis-of-code/aoc-client/ui/form/aoc-ui-input-text';
import { UserModelConfig } from '../../../../model-configs/users/user-model-config';
import { User } from '../../../../models/users/user';

@Component({
  standalone: true,
  selector: 'app-usuario-form',
  providers: [AocFormController],
  imports: [
    AocFormModule,
    AocUiFormModule,
    AocUiInputTextModule,
    ReactiveFormsModule,
    NgIf,
    AocUiInputGroupModule,
    AocUiButtonModule
  ],
  template: `
    <aoc-form [modelConfig]="modelConfig" [formGroup]="$any(formGroup)" [restOptions]="restOptions">
      <ng-template aocFormTemplate="body">
        <aoc-ui-form-page>
          <aoc-ui-form-row>
            <input aocUiInputText aocUiFormField="User name" [formControlName]="UserModelClass.field.USERNAME">
            <aoc-ui-input-group aocUiFormRowElement="Password">
              <input aocUiInputText [type]="passwordType" [formControlName]="UserModelClass.field.PASS"
                     [placeholder]="passwordPlaceholder">
              <button aocUiButton icon="visibility" (click)="swapPasswordType($event)"></button>
            </aoc-ui-input-group>
          </aoc-ui-form-row>
          <aoc-ui-form-row>
            <input aocUiInputText aocUiFormField="Full name" [formControlName]="UserModelClass.field.FULL_NAME">
            <input aocUiInputText aocUiFormField="E-Mail" [formControlName]="UserModelClass.field.EMAIL">
          </aoc-ui-form-row>
        </aoc-ui-form-page>
      </ng-template>
    </aoc-form>
  `
})
export class UserFormComponent implements OnInit {

  protected UserModelClass = User;
  protected formGroup: FormGroup<AocFormGroupType<User>>;
  protected user: User;
  protected passwordPlaceholder = 'Assign password...';
  protected passwordType: 'password' | 'text' = 'password';

  protected restOptions: AocRestOptions<User> = {
    fields: [ User.field.USERNAME, User.field.FULL_NAME, User.field.EMAIL ]
  };

  constructor(
    protected modelConfig: UserModelConfig,
    private aocFormController: AocFormController<User>
  ) {}

  ngOnInit() {
    this.formGroup = new FormGroup<AocFormGroupType<User>>({
      username: new FormControl(null, Validators.required),
      full_name: new FormControl(),
      pass: new FormControl(null),
      email: new FormControl(null, [Validators.required, Validators.email])
    });
    this.handleFormController().then();
  }

  protected swapPasswordType(_: MouseEvent) {
    this.passwordType = (this.passwordType === 'password') ? 'text' : 'password';
  }

  private async handleFormController() {
    this.user = await this.aocFormController.model();
    if (this.user.id) {
      this.passwordPlaceholder = 'Leave empty to keep current password...';
    } else {
      this.formGroup.controls.pass.addValidators(Validators.required);
      this.formGroup.controls.pass.updateValueAndValidity();
    }
  }
}
