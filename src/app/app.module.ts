import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './modules/home/components/home/home.component';
import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';
import { LoginComponent } from './core/authentication/login/login.component';
import { LogoutComponent } from './core/authentication/logout/logout.component';
import { AuthButtonLogicComponent } from './core/authentication/auth-button-logic/auth-button-logic.component';
import { MatSliderModule } from '@angular/material/slider';
import { MainGridComponent } from '../app/modules/home/components/main-grid/main-grid.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    AuthButtonLogicComponent,
    MainGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      ...env.auth,
    }),
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
