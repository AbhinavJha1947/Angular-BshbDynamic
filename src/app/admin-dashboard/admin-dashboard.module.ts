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
import { HeaderComponent } from './components/header/header.component';
import { HeaderModuleComponent } from './components/header-module/header-module.component';
import { HeaderNoticeComponent } from './components/header-notice/header-notice.component';
import { HeaderSubnoticeComponent } from './components/header-subnotice/header-subnotice.component';
import { FooterHotlinkComponent } from './components/footer-hotlink/footer-hotlink.component';
import { FooterMapComponent } from './components/footer-map/footer-map.component';
import { FooterAddressComponent } from './components/footer-address/footer-address.component';
import { HomeSliderImageComponent } from './components/home-slider-image/home-slider-image.component';
import { HomeOfficerDetailComponent } from './components/home-officer-detail/home-officer-detail.component';
import { HomeHyperLinkComponent } from './components/home-hyper-link/home-hyper-link.component';
import { HomePositiveNoteComponent } from './components/home-positive-note/home-positive-note.component';
import { HomeNewSchemeComponent } from './components/home-new-scheme/home-new-scheme.component';
import { HomeImportantNoticeComponent } from './components/home-important-notice/home-important-notice.component';
import { VideoUploadComponent } from './components/video-upload/video-upload.component';
import { FeedbackComponent } from './components/feedback/feedback.component';

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
    HeaderComponent,
    HeaderModuleComponent,
    HeaderNoticeComponent,
    HeaderSubnoticeComponent,
    FooterHotlinkComponent,
    FooterMapComponent,
    FooterAddressComponent,
    HomeSliderImageComponent,
    HomeOfficerDetailComponent,
    HomeHyperLinkComponent,
    HomePositiveNoteComponent,
    HomeNewSchemeComponent,
    HomeImportantNoticeComponent,
    VideoUploadComponent,
    FeedbackComponent,
    
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

