import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    public errorStr: string = '';
    private password: string = '';

    constructor() { }

    ngOnInit() {
    }

    public onLogin() {
        if (this.password === 'test') {
            // proceed to login
        }
        else {
            this.onFailedPasswordAttempt();
        }

        // reset password window
        this.password = '';
    }

    private onFailedPasswordAttempt() {
        this.errorStr = 'Error String';
    }

    @HostListener('document:keypress', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
        if (event.code === "Enter" && this.password.length > 0) {
            this.onLogin();
        }
    }
}
