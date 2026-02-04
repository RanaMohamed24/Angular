import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router, private toastr: ToastrService) { }

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Login successful:', form.value);
      this.toastr.success('Welcome back! Logged in successfully.', 'Success');
      this.router.navigate(['/products']);
    } else {
      this.toastr.error('Please enter valid credentials.', 'Error');
    }
  }
}
