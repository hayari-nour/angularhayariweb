import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormationsComponent } from './formations/formations.component';
import { CompetencesComponent } from './competences/competences.component';
import { CertificatsComponent } from './certificats/certificats.component';
import { ExperienceComponent } from './experiences/experiences.component';
import { PartnersComponent } from './partners/partners.component';
import { PdfDownloadComponent } from './pdf-download/pdf-download.component';

const routes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'formations', component: FormationsComponent },
{ path: 'competences', component: CompetencesComponent },
{ path: 'experiences', component: ExperienceComponent },
{ path: 'certificats', component: CertificatsComponent },
{ path: 'partners', component: PartnersComponent },
{ path: 'downloads', component: PdfDownloadComponent},
{ path: '', redirectTo: '/home', pathMatch: 'full' }, 
{ path: '**', redirectTo: '/home' }];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
