import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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



  constructor(
    private fb: FormBuilder,
  ) { 
    this.connexionform = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.inscriptionForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
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


}
