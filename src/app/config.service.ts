import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  readonly apiBaseUrl = 'https://localhost:7169/api';
  readonly employeeListUrl = `${this.apiBaseUrl}/EmployeeList`;
  readonly captchaGenerateUrl = `${this.apiBaseUrl}/captcha/generate`;
  readonly captchaValidateUrl = `${this.apiBaseUrl}/captcha/validate`;
  readonly feedbackUrl = `${this.apiBaseUrl}/feedback`;
  readonly captchaAudioUrl = `${this.apiBaseUrl}/captcha/audio`;

  readonly officerlist = `${this.apiBaseUrl}/officerlist`;
  readonly ContactList = `${this.apiBaseUrl}/ContactList`;
  readonly SubNotice = `${this.apiBaseUrl}/SubNotice`;
  readonly MDMessage = `${this.apiBaseUrl}/MDMessage`;
  readonly RegisteredOffices = `${this.apiBaseUrl}/RegisteredOffices`;
  readonly Chairman = `${this.apiBaseUrl}/Chairman`;
  readonly CurrentTenders = `${this.apiBaseUrl}/CurrentTenders`;
  readonly EmployeeList = `${this.apiBaseUrl}/EmployeeList`;
  readonly Feedback = `${this.apiBaseUrl}/Feedback`;
  readonly hyperlink = `${this.apiBaseUrl}/hyperlink`;
  readonly newScheme = `${this.apiBaseUrl}/newScheme`;
  readonly positivenoteurl = `${this.apiBaseUrl}/positive-note`;
  readonly mdlisturl = `${this.apiBaseUrl}/md-list`; 
  readonly PhotoGallery = `${this.apiBaseUrl}/PhotoGallery`;
  readonly VideoGallery = `${this.apiBaseUrl}/VideoGallery`;
  readonly userloginsendotp = `${this.apiBaseUrl}/User/sign-up/request-otp-for-login`;
  readonly userloginverifyotp = `${this.apiBaseUrl}/User/sign-up/verify-otp`;
  readonly Adminlogin = `${this.apiBaseUrl}/Admin/login`;
  readonly Adminloginverify = `${this.apiBaseUrl}/Admin/verify-otp`;
  
  readonly Banner =`${this.apiBaseUrl}/Banner`;
  readonly carouselfooter =`${this.apiBaseUrl}/carouselfooter`;
  readonly Header1 =`${this.apiBaseUrl}/Header1`;
  readonly homepage1 =`${this.apiBaseUrl}/homepage1`;

  constructor() { }
}