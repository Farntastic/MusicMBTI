import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignUpService } from "../../services/signup.service";
@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.css'
})

export class SignUpFormComponent {
  user = {
    username: '',
    email: '',
    password: ''
  };

  constructor(private SignUpService: SignUpService) { }

  register() {
    this.SignUpService.register(this.user).subscribe(response => {
      console.log('User registered successfully:', response);
      // คุณสามารถทำการ redirect หรือแสดงข้อความสำเร็จที่นี่
    }, error => {
      console.error('Error registering user:', error.message);
      // แสดงข้อความข้อผิดพลาดที่นี่
    });
  }
}
