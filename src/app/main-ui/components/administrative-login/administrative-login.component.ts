import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/main-ui/Services/auth.service';

@Component({
  selector: 'app-administrative-login',
  templateUrl: './administrative-login.component.html',
  styleUrls: ['./administrative-login.component.css']
})
export class AdministrativeLoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/admin']);
    } else {
      alert('Invalid credentials');
    }
  }
}
