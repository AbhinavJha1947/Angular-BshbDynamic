import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainUiComponent } from '../main-ui/main-ui.component';
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
import { SitemapComponent } from 'src/app/main-ui/components/sitemap/sitemap.component';

const routes: Routes = [
  { 
    path: '', component: MainUiComponent, children: [
      { path: '', component: HomePageComponent }, 
      { path: 'acts-and-rules', component: ActsAndRulesComponent },
      { path: 'feedback', component: FeedbackComponent }, 
      { path: 'sitemap', component: SitemapComponent }, 
      { path: 'termsandcondition', component: TermsandconditionComponent }, 
      { path: 'website-policy', component: WebsitePolicyComponent }, 
      { path: 'administrative-login', component: AdministrativeLoginComponent },
      { path: 'archieve-tenders', component: ArchieveTendersComponent },
      { path: 'career', component: CareerComponent },
      { path: 'chairman-list', component: ChairmanListComponent },
      { path: 'circulars', component: CircularsComponent },
      { path: 'contact-list', component: ContactListComponent },
      { path: 'current-tenders', component: CurrentTendersComponent },
      { path: 'layout-plan', component: LayoutPlanComponent },
      { path: 'md-list', component: MdListComponent },
      { path: 'md-message', component: MdMessageComponent },
      { path: 'navbar', component: NavbarComponent },
      { path: 'new-schemes', component: NewSchemesComponent },
      { path: 'notices', component: NoticesComponent },
      { path: 'office-orders', component: OfficeOrdersComponent },
      { path: 'officers-list', component: OfficersListComponent },
      { path: 'employee-list', component: EmployeeListComponent },
      { path: 'organizational-structure', component: OrganizationalStructureComponent },
      { path: 'policies', component: PoliciesComponent },
      { path: 'vision', component: VisionComponent },
      { path: 'photo-gallery', component: PhotoGalleryComponent },
      { path: 'video-gallery', component: VideoGalleryComponent },
      { path: 'press-release', component: PressReleaseComponent },
      { path: 'minutes-board-meeting', component: MinutesBoardMeetingComponent },
      { path: 'old-schemes', component: OldSchemesComponent },
      { path: 'user-login', component: UserLoginComponent },
      { path: 'section-officer-login', component: SectionOfficerLoginComponent },
      { path: 'sub-notices', component: SubNoticesComponent },
      { path: 'samadhan-incharge-login', component: SamadhanInchargeLoginComponent },
      { path: 'about-us', component: AboutUsComponent },

    ]
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainuiRoutingModule { }
