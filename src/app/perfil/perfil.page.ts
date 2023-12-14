import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators,FormControl,FormsModule } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  UploadForm:any;
  perfil: FormGroup = new FormGroup({
    nombre: new FormControl(''),
    // username: new FormControl(''),
    // email: new FormControl(''),
    // password: new FormControl(''),
    // confirmPassword: new FormControl(''),
    // acceptTerms: new FormControl(false),
  });

  submitted = false;
  constructor(private router: Router,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.perfil = this.formBuilder.group(
      {
        // nombre1: ['', Validators.required],
        nombre: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
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
      //   // validators: [Validation.match('password', 'confirmPassword')]
      // }
    );
  
  }

  formularioVlidacion(){

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
    }

    console.log(JSON.stringify(this.perfil.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.perfil.reset();
  }

}
