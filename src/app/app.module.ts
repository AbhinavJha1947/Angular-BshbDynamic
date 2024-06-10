import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';  // Add this line
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainUiModule } from 'src/app/main-ui/mainui/mainui.module';
import { AdminDashboardModule } from './admin-dashboard/admin-dashboard.module';
import { AuthService } from 'src/app/main-ui/Services/auth.service';
import { AuthGuard } from 'src/app/main-ui/Services/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainUiModule,
    AdminDashboardModule,
    RouterModule ,
    HttpClientModule 
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
