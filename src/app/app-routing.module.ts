import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainUiComponent } from './main-ui/main-ui/main-ui.component';
import { AuthGuard } from 'src/app/main-ui/Services/auth.guard';

const routes: Routes = [
  { path: '', component: MainUiComponent },
  { path: 'admin', loadChildren: () => import('./admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardModule),canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
