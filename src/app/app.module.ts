import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './components/admin/aboutus/aboutus.component';
import { AdminModule } from './components/admin/admin.module';
import { ContactusComponent } from './components/admin/contactus/contactus.component';
import { HomeComponent } from './components/admin/home/home.component';
import { LoginComponent } from './components/admin/login/login.component';
import { NavbarComponent } from './components/admin/navbar/navbar.component';
import { ProductComponent } from './components/admin/product/product.component';
import { RegisterComponent } from './components/admin/register/register.component';
import { UpgradeplanComponent } from './components/admin/upgradeplan/upgradeplan.component';
import { AdminDashboardModule } from './components/admin-dashboard/admin-dashboard.module';
import { SidemenuComponent } from './components/admin-dashboard/sidemenu/sidemenu.component';
import { NgxFileDropModule } from 'ngx-file-drop';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactusComponent,
    ProductComponent,
    AboutusComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    UpgradeplanComponent,
    SidemenuComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    AdminDashboardModule,
    NgxFileDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
