import { Component, HostListener, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    private errorStr: string;
    private password: string;
    passwordForm: FormGroup;

    constructor(formBuilder: FormBuilder) { 
        this.passwordForm = formBuilder.group({
            'password': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
        });
    }

    ngOnInit() {
        this.password = '';
        this.errorStr = '';
    }

    private onFailedPasswordAttempt() {
        this.errorStr = 'Error String';
    }

    private verifyPassword(password: string) {   // TODO: grab password from somewhere else
        if (password === 'test') {
            // transition to next page
        }
        else {
            this.onFailedPasswordAttempt();
        }

        // reset password window
        this.password = '';
    }

    @HostListener('document:keypress', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
        if (event.code === "Enter" && this.passwordForm.valid) {
            console.log(this.passwordForm.value.password);
            this.verifyPassword(this.passwordForm.value.password);
        }
    }
}
