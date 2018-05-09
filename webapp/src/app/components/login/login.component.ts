import { Component, HostListener, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private errorStr: string;
  private password: string;
  passwordForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) {
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
      this.router.navigate(['home']);
    } else {
      this.onFailedPasswordAttempt();
    }

    // reset password window
    this.password = '';
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.code === "Enter" && this.passwordForm.valid) {
      this.verifyPassword(this.passwordForm.value.password);
    }
  }
}
