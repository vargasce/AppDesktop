import { Component, OnInit } from '@angular/core';
import { LoginModel } from './Models/login.model';
import { UsuarioModel } from './Models/usuario.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './Service/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginData: LoginModel;
  public usuarioData: UsuarioModel;
  public loginFormGroup!: FormGroup;
  public usuarioFormGroup!: FormGroup;

  constructor( 
    private route_navigate: Router,
    private fb: FormBuilder,
    private _loginService: LoginService,
    private _toastr: ToastrService
  ) { 
    this.loginData = new LoginModel('','');
    this.usuarioData = new UsuarioModel('','','','','','',true,'',0);
  }

  ngOnInit(): void {
    this.validation();
  }

  public OnLogin( event: Event ){
    if( !this.loginFormGroup.invalid ){
        this.LoginAuth();
    }
  }

  public OnRegister( event: Event ){
      if( !this.usuarioFormGroup.invalid ){
        this.CreateUser();
      }
  }

  private validation(){

    this.loginFormGroup = this.fb.group({
      usuario:['',Validators.required],
      pass:['',Validators.required],
    });

    this.usuarioFormGroup = this.fb.group({
      nombre:['',Validators.required],
      apellido:['',Validators.required],
      usuario:['',Validators.required],
      pass:['',Validators.required],
      fecha_alta:['',Validators.required],
      activo:['',Validators.required],
      email:['',Validators.required],
      numero:['',Validators.required],
    });

  }

  /** LOGIN DE USUARIO.
   * @Observations => Realiza el login de usuario -> Redirec dashboard
   */
  private async LoginAuth(){

    try {
        let result = await this._loginService.LoginUser( this.loginData );       
        if( result ) this.route_navigate.navigate(['/dashboard']);
        this._toastr.error('Error ingresando usuario y/o contrasena','Error Login');
    } catch ( _error ) {
        this._toastr.error('Error en la conexion','Error Login Server');
    }

  }

  /** NUEVO USUARIO.
   * @Observations => Realiza la carga de nuevo usuario
   */
  private async CreateUser(){

    try {

        let result = await this._loginService.CreateUser( this.usuarioData );       
        if( result ){
            this._toastr.success('Carga de nuevo usuario exitoso.','Exito');
        }else{
            this._toastr.error('Error dando de alta un nuevo usuario','Error Nuevo Usuario');
        }

    } catch ( _error ) {
        this._toastr.error('Error', `${_error}`);
    }

  }

}
