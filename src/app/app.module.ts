import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExperienceComponent } from './experiences/experiences.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { PartnersComponent } from './partners/partners.component';
import { CertificatsComponent } from './certificats/certificats.component';
import { FormationsComponent } from './formations/formations.component';
import { CompetencesComponent } from './competences/competences.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ExperienceComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    PartnersComponent,
    CertificatsComponent,
    FormationsComponent,
    CompetencesComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
