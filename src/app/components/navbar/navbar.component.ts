import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import { AuthStateService } from 'src/app/services/auth-state.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
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
  btnConexion =  'btn-visible'
  btnDeconexion = 'btn-invisible'



  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private token: TokenService,
    private authState: AuthStateService,
    private toastr: ToastrService,
    private router: Router,
  ) { 
    this.connexionform = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.inscriptionForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {
    this.islog(); 
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
        console.log(this.authService.currentAccesToken);
        //
      },
      (error) => {
        this.errors = error.error;
        this.errors.message === 'Unauthorized'
        ?this.toastr.error('Mot de pass ou email incorecte', 'Erreur ⚠️')
        :this.toastr.error(this.errors.message, 'Erreur ⚠️')
      },
      () => {
        this.authState.setAuthState(true);
        this.connexionform.reset();
        this.loginForm =  'loginFormHidden';
        this.toastr.success('Vous vous êtes connecté', 'Réussi🌤️')
        
      }
    );
  }
 
  //
  islog(){
    const user = localStorage.getItem('auth_token');

    if(!user){
      this.btnConexion = 'btn-visible'
      this.btnDeconexion = 'btn-invisible'
    }
    this.btnConexion = 'btn-invisible';
    this.btnDeconexion = 'btn-visible';
    }
  

  //register
  onRegister(){
    console.log(this.inscriptionForm.value);
    
    this.authService.register(this.inscriptionForm.value).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
        this.errors = error.error;
        this.toastr.error(this.errors.message, 'Entrer une autre email')
        this.registerForm = "registerFormHidden"
      },
      );

      this.inscriptionForm.reset();
      this.registerForm = "registerFormHidden"
      this.toastr.success('Vous faites partie désormé de notre communauté', 'Inscription réussi')
  }

  onLogout(){
    this.authService.logOut();
    this.toastr.show('Vous vous êtes déconnecté 💓')
    this.btnConexion = 'btn-visible';
    this.btnDeconexion = 'btn-invisible';
    localStorage.clear();
    this.router.navigateByUrl('/');
    
  }

}


