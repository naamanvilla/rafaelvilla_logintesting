// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  bindingExample: boolean = false;

  constructor(private router: Router){}

  login():void {
    // Perform login authentication logic here
    if (this.username === 'admin' && this.password === 'password') {
      // Successful login
      console.log('Login successful!');
      this.router.navigate(['/welcome']);
      alert('Login successful!');
    } else {
      // Invalid credentials
      console.log('Invalid username or password');
      alert('Invalid username or password');
    }
  }
}
