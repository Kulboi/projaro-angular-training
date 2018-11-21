import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { OccupationComponent } from './profile/occupation/occupation.component';
import { FinancialComponent } from './profile/financial/financial.component';
import { PasswordComponent } from './profile/password/password.component';
import { SettingsComponent } from './profile/settings/settings.component';
import { BiodataComponent } from './profile/biodata/biodata.component';
import { AccountHeaderComponent } from './includes/account-header/account-header.component';
import { TimelineComponent } from './timeline/timeline.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    OccupationComponent,
    FinancialComponent,
    PasswordComponent,
    SettingsComponent,
    BiodataComponent,
    AccountHeaderComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
