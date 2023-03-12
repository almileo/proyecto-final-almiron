import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public isLogged: boolean = false;
  formLogin!: FormGroup;

  inputType: string = 'password';

  regexEmail: string = '^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$'

  constructor(
    private loginSvc: LoginService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.setupForm();
  }

  private setupForm() {
    this.formLogin = this.formBuilder.group({
      email: this.formBuilder.control(''),
      password: this.formBuilder.control(''),
      esAdmin: this.formBuilder.control(false)
    })
  }

  public async login() {
    const usuario = this.formLogin.value;
    this.loginSvc.login(usuario);
  }

  public showPassword() {
    this.inputType = 'text';
  }

  public hidePassword() {
    this.inputType = 'password';
  }

}
