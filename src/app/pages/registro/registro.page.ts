import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  UploadForm:any;
  registro: FormGroup = new FormGroup({
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    edad: new FormControl(''),
    telfijo: new FormControl(''),
    celular: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    passwordconfirmacion: new FormControl(''),
    termsAccepted: new FormControl(''),
  });
  submitted = false;

  constructor(private router: Router,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initFormsRegistro();
  }

  initFormsRegistro(){
    this.registro = this.formBuilder.group(
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
        ], telfijo: [
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
        ],  password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40),
          ]
        ], passwordconfirmacion: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40),
          ]
        ],
          termsAccepted: [
            false, Validators.requiredTrue
        ],
        
      //   email: ['', [Validators.required, Validators.email]],
      //   password: [
      //     '',
      //     [
      //       Validators.required,
      //       Validators.minLength(6),
      //       Validators.maxLength(40)
      //     ]
      //   ],
      //   confirmPassword: ['', Validators.required],
      //   acceptTerms: [false, Validators.requiredTrue]
      },
      // {
      //   validators: [Validators.match('password', 'passwordconfirmacion')]
      //  }
    );
  }

  navigate(page:any){
    this.router.navigate([page]);
    this.onReset();
  }

  get f(): { [key: string]: AbstractControl } {
    return this.registro.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.registro.invalid) {
      return;
    }

    console.log(JSON.stringify(this.registro.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.registro.reset();
  }

}
