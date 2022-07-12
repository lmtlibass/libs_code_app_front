import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import { AuthStateService } from 'src/app/services/auth-state.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  connexionform: FormGroup;
  inscriptionForm: FormGroup;
  loginForm =  'loginFormHidden';
  registerForm = 'registerFormHidden';
  errors: any;



  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private token: TokenService,
    private authState: AuthStateService
  ) { 
    this.connexionform = this.fb.group({
      email: [],
      password: [],
    });

    this.inscriptionForm = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
    });
  }

  ngOnInit(): void {
    
  }

  ShowModalLogin(){
    this.loginForm = 'loginFormVisible';
  }
  showRegister(){
    this.registerForm = 'registerFormVisible';
    
  }

  close(){
    this.loginForm = 'loginFormHidden';
    this.registerForm = 'registerFormHidden';
  }

  //login
  onLogin(){
    this.authService.signin(this.connexionform.value).subscribe(
      (result) => {
        this.responseHandler(result);
      },
      (error) => {
        this.errors = error.error;
      },
      () => {
        this.authState.setAuthState(true);
        this.connexionform.reset();
        this.loginForm =  'loginFormHidden';
      }
    );
  }
  responseHandler(data:any) {
    this.token.handleData(data.access_token);
  }

  //register
  onRegister(){
    this.authService.register(this.inscriptionForm.value).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        this.errors = error.error;
      },
      () => {
        this.inscriptionForm.reset();
        this.ShowModalLogin();
      }
    );
  }


}


