import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ReviewsSliderComponent } from './components/reviews-slider/reviews-slider.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StatComponent } from './components/stat/stat.component';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MainContentComponent,
    LoginComponent,
    RegisterComponent,
    LandingComponent,
    ReviewsSliderComponent,
    StatComponent,
    WhyChooseUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule, // Add this
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
