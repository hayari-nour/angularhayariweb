import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { ToolbarmenuComponent } from './toolbarmenu/toolbarmenu.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PartnersComponent } from './partners/partners.component';
import { CertificatsComponent } from './certificats/certificats.component';
import { FormationsComponent } from './formations/formations.component';
import { CompetencesComponent } from './competences/competences.component';
import { ExperienceComponent } from './experiences/experiences.component';
import { PdfDownloadComponent } from './pdf-download/pdf-download.component';


@Component({
  selector: 'app-root',
  standalone:true, 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule,RouterLink, RouterOutlet,ToolbarmenuComponent,FooterComponent,PdfDownloadComponent /*,HomeComponent,
PartnersComponent, CertificatsComponent, FormationsComponent, CompetencesComponent,ExperienceComponent*/],
})
export class AppComponent {
  title = 'hayari web';
}
