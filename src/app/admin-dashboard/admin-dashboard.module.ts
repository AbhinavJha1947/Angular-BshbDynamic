import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';  

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminDashboardRoutingModule } from 'src/app/admin-dashboard-routing/admin-dashboard-routing.module';
import { ChairmenListComponent } from './components/chairmen-list/chairmen-list.component';
import { MdListComponent } from './components/md-list/md-list.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { CurrentTenderComponent } from './components/current-tender/current-tender.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { MdMessageComponent } from './components/md-message/md-message.component';
import { OfficerListComponent } from './components/officer-list/officer-list.component';
import { PhotoUploadComponent } from './components/photo-upload/photo-upload.component';
import { HeaderNoticeComponent } from './components/header-notice/header-notice.component';
import { FooterAddressComponent } from './components/footer-address/footer-address.component';
import { HomeOfficerDetailComponent } from './components/home-officer-detail/home-officer-detail.component';
import { VideoUploadComponent } from './components/video-upload/video-upload.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { Header1Component } from './components/header1/header1.component';
import { BannerComponent } from './components/banner/banner.component';
import { Homepage1Component } from './components/homepage1/homepage1.component';
import { CarouselfooterComponent } from './components/carouselfooter/carouselfooter.component';

@NgModule({
  declarations: [
    
    AdminDashboardComponent,
    ChairmenListComponent,
    MdListComponent,
    ContactListComponent,
    CurrentTenderComponent,
    EmployeeListComponent,
    MdMessageComponent,
    OfficerListComponent,
    PhotoUploadComponent,
    HeaderNoticeComponent,
    FooterAddressComponent,
    HomeOfficerDetailComponent,
    VideoUploadComponent,
    FeedbackComponent,
    Header1Component,
    BannerComponent,
    Homepage1Component,
    CarouselfooterComponent,
    
  ],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule,
    RouterModule ,
    FormsModule 
  ],
  exports: [
   
    AdminDashboardComponent
  ]
})
export class AdminDashboardModule { }

