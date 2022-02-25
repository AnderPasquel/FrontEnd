import {Component, OnInit} from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import { UserFormService } from 'src/app/service/user-form.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})

export class UserFormComponent implements OnInit {
  
  loginForm : FormGroup; 
  constructor(private fb:FormBuilder, private userFormService: UserFormService)
  {
    this.loginForm = fb.group({
      usuario: ['', Validators.required],
      contrasena: ['', Validators.required]
    });
  }
  ngOnInit(){}
  getErrorMessage() {
    if (this.loginForm.get("usuario")?.hasError('required')) {
      return 'You must enter a value';
    }

    return this.loginForm.hasError('usuario') ? 'Not a valid email' : '';
  }

  onLogin()
  {    
    this.userFormService.Login(this.loginForm.value.usuario,this.loginForm.value.contrasena).subscribe(data =>{
      console.log("Login");
      console.log(data);      
    })
  }

}
