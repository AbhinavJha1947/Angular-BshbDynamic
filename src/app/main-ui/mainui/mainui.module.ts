import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { FormsModule } from '@angular/forms'; 
import { HeaderComponent } from 'src/app/main-ui/components/header/header.component';
import { FooterComponent } from 'src/app/main-ui/components/footer/footer.component';
import { MainUiComponent } from 'src/app/main-ui/main-ui/main-ui.component';
import { MainuiRoutingModule } from './mainui-routing.module';
import { ActsAndRulesComponent } from 'src/app/main-ui/components/acts-and-rules/acts-and-rules.component';
import { AdministrativeLoginComponent } from 'src/app/main-ui/components/administrative-login/administrative-login.component';
import { ArchieveTendersComponent } from 'src/app/main-ui/components/archieve-tenders/archieve-tenders.component';
import { CareerComponent } from 'src/app/main-ui/components/career/career.component';
import { ChairmanListComponent } from 'src/app/main-ui/components/chairman-list/chairman-list.component';
import { CircularsComponent } from 'src/app/main-ui/components/circulars/circulars.component';
import { ContactListComponent } from 'src/app/main-ui/components/contact-list/contact-list.component';
import { CurrentTendersComponent } from 'src/app/main-ui/components/current-tenders/current-tenders.component';
import { LayoutPlanComponent } from 'src/app/main-ui/components/layout-plan/layout-plan.component';
import { MdListComponent } from 'src/app/main-ui/components/md-list/md-list.component';
import { MdMessageComponent } from 'src/app/main-ui/components/md-message/md-message.component';
import { NavbarComponent } from 'src/app/main-ui/components/navbar/navbar.component';
import { NewSchemesComponent } from 'src/app/main-ui/components/new-schemes/new-schemes.component';
import { NoticesComponent } from 'src/app/main-ui/components/notices/notices.component';
import { OfficeOrdersComponent } from 'src/app/main-ui/components/office-orders/office-orders.component';
import { OfficersListComponent } from 'src/app/main-ui/components/officers-list/officers-list.component';
import { EmployeeListComponent } from 'src/app/main-ui/components/employee-list/employee-list.component';
import { OrganizationalStructureComponent } from 'src/app/main-ui/components/organizational-structure/organizational-structure.component';
import { PoliciesComponent } from 'src/app/main-ui/components/policies/policies.component';
import { VisionComponent } from 'src/app/main-ui/components/vision/vision.component';
import { PhotoGalleryComponent } from 'src/app/main-ui/components/photo-gallery/photo-gallery.component';
import { VideoGalleryComponent } from 'src/app/main-ui/components/video-gallery/video-gallery.component';
import { PressReleaseComponent } from 'src/app/main-ui/components/press-release/press-release.component';
import { MinutesBoardMeetingComponent } from 'src/app/main-ui/components/minutes-board-meeting/minutes-board-meeting.component';
import { OldSchemesComponent } from 'src/app/main-ui/components/old-schemes/old-schemes.component';
import { UserLoginComponent } from 'src/app/main-ui/components/user-login/user-login.component';
import { SectionOfficerLoginComponent } from 'src/app/main-ui/components/section-officer-login/section-officer-login.component';
import { SamadhanInchargeLoginComponent } from 'src/app/main-ui/components/samadhan-incharge-login/samadhan-incharge-login.component';
import { SubNoticesComponent } from 'src/app/main-ui/sub-notices/sub-notices.component';
import { AboutUsComponent } from 'src/app/main-ui/components/about-us/about-us.component';
import { HomePageComponent } from 'src/app/main-ui/components/home-page/home-page.component';
import { FeedbackComponent } from 'src/app/main-ui/components/feedback/feedback.component';
import { TermsandconditionComponent } from 'src/app/main-ui/components/termsandcondition/termsandcondition.component';
import { WebsitePolicyComponent } from 'src/app/main-ui/components/website-policy/website-policy.component';
import { ImageSliderComponent } from 'src/app/main-ui/components/image-slider/image-slider.component';
import { CarouselModule } from '@syncfusion/ej2-angular-navigations';
import { DataService } from 'src/app/main-ui/data.service';
import { SitemapComponent } from 'src/app/main-ui/components/sitemap/sitemap.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FeedbackComponent,
    SitemapComponent,
    TermsandconditionComponent,
    WebsitePolicyComponent,
    ImageSliderComponent,
    FooterComponent,
    MainUiComponent,
    ActsAndRulesComponent,
    AdministrativeLoginComponent,
    ArchieveTendersComponent,
    CareerComponent,
    ChairmanListComponent,
    CircularsComponent,
    ContactListComponent,
    CurrentTendersComponent,
    LayoutPlanComponent,
    MdListComponent,
    MdMessageComponent,
    NavbarComponent,
    NewSchemesComponent,
    NoticesComponent,
    OfficeOrdersComponent,
    OfficersListComponent,
    EmployeeListComponent,
    OrganizationalStructureComponent,
    PoliciesComponent,
    VisionComponent,
    PhotoGalleryComponent,
    VideoGalleryComponent,
    PressReleaseComponent,
    MinutesBoardMeetingComponent,
    OldSchemesComponent,
    UserLoginComponent,
    SectionOfficerLoginComponent,
    SamadhanInchargeLoginComponent,
    SubNoticesComponent,
    AboutUsComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule ,
    MainuiRoutingModule,
    FormsModule,
    CarouselModule
  ],
  providers: [DataService],
  exports: [
    // HeaderComponent,
    // FooterComponent,
    MainUiComponent
  ]
})
export class MainUiModule { }
