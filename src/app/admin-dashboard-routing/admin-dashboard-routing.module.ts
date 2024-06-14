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
import { HeaderComponent } from 'src/app/admin-dashboard/components/header/header.component';
import { HeaderModuleComponent } from 'src/app/admin-dashboard/components/header-module/header-module.component';
import { HeaderNoticeComponent } from 'src/app/admin-dashboard/components/header-notice/header-notice.component';
import { HeaderSubnoticeComponent } from 'src/app/admin-dashboard/components/header-subnotice/header-subnotice.component';
import { FooterHotlinkComponent } from 'src/app/admin-dashboard/components/footer-hotlink/footer-hotlink.component';
import { FooterMapComponent } from 'src/app/admin-dashboard/components/footer-map/footer-map.component';
import { FooterAddressComponent } from 'src/app/admin-dashboard/components/footer-address/footer-address.component';
import { HomeSliderImageComponent } from 'src/app/admin-dashboard/components/home-slider-image/home-slider-image.component';
import { HomeOfficerDetailComponent } from 'src/app/admin-dashboard/components/home-officer-detail/home-officer-detail.component';
import { HomeHyperLinkComponent } from 'src/app/admin-dashboard/components/home-hyper-link/home-hyper-link.component';
import { HomePositiveNoteComponent } from 'src/app/admin-dashboard/components/home-positive-note/home-positive-note.component';
import { HomeNewSchemeComponent } from 'src/app/admin-dashboard/components/home-new-scheme/home-new-scheme.component';
import { HomeImportantNoticeComponent } from 'src/app/admin-dashboard/components/home-important-notice/home-important-notice.component';
import { FeedbackComponent } from 'src/app/admin-dashboard/components/feedback/feedback.component';

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
      { path: 'header', component: HeaderComponent },
      { path: 'header-module', component: HeaderModuleComponent },
      { path: 'header-notice', component: HeaderNoticeComponent },
      { path: 'header-subnotice', component: HeaderSubnoticeComponent },
      { path: 'footer-hotlink', component: FooterHotlinkComponent },
      { path: 'footer-map', component: FooterMapComponent },
      { path: 'footer-address', component: FooterAddressComponent },
      { path: 'home-slider-image', component: HomeSliderImageComponent },
      { path: 'home-officer-detail', component: HomeOfficerDetailComponent },
      { path: 'home-hyper-link', component: HomeHyperLinkComponent },
      { path: 'home-positive-note', component: HomePositiveNoteComponent },
      { path: 'home-new-scheme', component: HomeNewSchemeComponent },
      { path: 'home-important-notice', component: HomeImportantNoticeComponent },
      { path: 'feedback', component: FeedbackComponent }


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
