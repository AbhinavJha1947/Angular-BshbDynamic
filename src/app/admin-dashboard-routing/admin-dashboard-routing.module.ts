import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from 'src/app/admin-dashboard/admin-dashboard/admin-dashboard.component';
import { ChairmenListComponent } from 'src/app/admin-dashboard/components/chairmen-list/chairmen-list.component';
import { MdListComponent } from 'src/app/admin-dashboard/components/md-list/md-list.component';
import { ContactListComponent } from 'src/app/admin-dashboard/components/contact-list/contact-list.component';
import { CurrentTenderComponent } from 'src/app/admin-dashboard/components/current-tender/current-tender.component';
import { EmployeeListComponent } from 'src/app/admin-dashboard/components/employee-list/employee-list.component';
import { MdMessageComponent } from 'src/app/admin-dashboard/components/md-message/md-message.component';
import { OfficerListComponent } from 'src/app/admin-dashboard/components/officer-list/officer-list.component';
import { PhotoUploadComponent } from 'src/app/admin-dashboard/components/photo-upload/photo-upload.component';
import { VideoUploadComponent } from 'src/app/admin-dashboard/components/video-upload/video-upload.component';
import { HeaderNoticeComponent } from 'src/app/admin-dashboard/components/header-notice/header-notice.component';
import { FooterAddressComponent } from 'src/app/admin-dashboard/components/footer-address/footer-address.component';
import { HomeOfficerDetailComponent } from 'src/app/admin-dashboard/components/home-officer-detail/home-officer-detail.component';
import { FeedbackComponent } from 'src/app/admin-dashboard/components/feedback/feedback.component';
import { Header1Component } from '../admin-dashboard/components/header1/header1.component';
import { BannerComponent } from '../admin-dashboard/components/banner/banner.component';
import { Homepage1Component } from '../admin-dashboard/components/homepage1/homepage1.component';
import { CarouselfooterComponent } from '../admin-dashboard/components/carouselfooter/carouselfooter.component';
const routes: Routes = [
  {
    path: '', component: AdminDashboardComponent, children: [
      { path: 'chairmen-list', component: ChairmenListComponent },
      { path: 'md-list', component: MdListComponent },
      { path: 'contact-list', component: ContactListComponent },
      { path: 'current-tender', component: CurrentTenderComponent },
      { path: 'employee-list', component: EmployeeListComponent },
      { path: 'md-message', component: MdMessageComponent },
      { path: 'officer-list', component: OfficerListComponent },
      { path: 'photo-upload', component: PhotoUploadComponent },
      { path: 'video-upload', component: VideoUploadComponent },
      { path: 'header-notice', component: HeaderNoticeComponent },
      { path: 'footer-address', component: FooterAddressComponent },
      { path: 'home-officer-detail', component: HomeOfficerDetailComponent },
      { path: 'feedback', component: FeedbackComponent },
      { path: 'header1', component: Header1Component },
      { path: 'banner', component: BannerComponent },
      { path: 'homepage1', component: Homepage1Component },
      { path: 'carouselfooter', component: CarouselfooterComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
