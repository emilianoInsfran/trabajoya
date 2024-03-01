import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { DatosPerfilUsuario } from "../../services-shared/datos-perfil.service";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})

export class PerfilPage implements OnInit {
  UploadForm:any;
  perfil: FormGroup = new FormGroup({
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    edad: new FormControl(''),
    telfijo: new FormControl(''),
    celular: new FormControl(''),
    email: new FormControl(''),
  });

  submitted:boolean = false;
  constructor(private router: Router,private formBuilder: FormBuilder,public datosPerfilUsuario: DatosPerfilUsuario) {}

  ngOnInit() {
    this.setPerfilEditado();
    this.formularioVlidacion();
    this.getDatosPerfil();
  }

  getDatosPerfil(){
    const datosPerfil = this.datosPerfilUsuario.getDataPerfil();
    console.log("DATOS DE PERFIL: ",datosPerfil.perfil);
    //Inicializa los datos del formulario
    this.perfil.setValue({
      nombre: datosPerfil.nombre,
      apellido: datosPerfil.apellido,
      edad: datosPerfil.edad,
      telfijo: datosPerfil.telFijo,
      celular: datosPerfil.celular,
      email: datosPerfil.email,
    });

    // this.deshabilitarCampos();
  }

  deshabilitarCampos() {
    this.perfil.disable();
  }

  formularioVlidacion(){

    this.perfil = this.formBuilder.group(
      {
        // nombre1: ['', Validators.required],
        nombre: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20)
          ]
        ],
        apellido: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        edad: [
          '',
          [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(3),
            Validators.min(-90),
            Validators.max(90),
            Validators.pattern(/\-?\d*\.?\d{1,2}/)
          ]
        ]
        ,telfijo: [
          '',
          [
            Validators.minLength(8),
            Validators.maxLength(8),
            Validators.min(10000000),
            Validators.max(99999999),
            Validators.pattern(/\-?\d*\.?\d{1,2}/)
          ]
        ], celular: [
          '',
          [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(10),
            Validators.min(1000000000),
            Validators.max(9999999999),
            Validators.pattern(/\-?\d*\.?\d{1,2}/)
          ]
        ], email: [
          '',
          [
            Validators.required,
            Validators.pattern(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/),
            Validators.email
          ]
        ]
        // password: [
        //   '',
        //   [
        //     Validators.required,
        //     Validators.minLength(6),
        //     Validators.maxLength(40)
        //   ]
        // ],
      //   confirmPassword: ['', Validators.required],
      //   acceptTerms: [false, Validators.requiredTrue]
      },
      // {
      //   // validators: [Validation.match('password', 'confirmPassword')]
      // }
    );
  }

  navigate(page:any){
    this.router.navigate([page])
  }

  get f(): { [key: string]: AbstractControl } {
    return this.perfil.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.perfil.invalid) {
      return;
    }else{
      this.setPerfilEditado();
    }

    console.log(JSON.stringify(this.perfil.value, null, 2));
  }

  onReset(): void {
    this.perfil.reset();
  }

  editarPerfil() {
    console.log("Editar perfil");
    this.datosPerfilUsuario.setEditarPerfil(true);
  }

  setPerfilEditado() {
    this.datosPerfilUsuario.setEditarPerfil(false);
  }
}
