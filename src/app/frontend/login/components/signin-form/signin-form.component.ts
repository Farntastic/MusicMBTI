import { Component } from '@angular/core';
import { SigninService } from '../../services/signin.service'; // นำเข้า UserService
@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrl: './signin-form.component.css'
})
export class SignInFormComponent {
  usernameOrEmail: string = '';
  password: string = '';

  constructor(private SigninService: SigninService) {}

  login() {
    this.SigninService.login(this.usernameOrEmail, this.password).subscribe(response => {
      console.log('User logged in successfully:', response);
      // คุณสามารถทำการ redirect หรือแสดงข้อความสำเร็จที่นี่
    }, error => {
      console.error('Error logging in:', error.message);
      // แสดงข้อความข้อผิดพลาดที่นี่
    });
  }
}
