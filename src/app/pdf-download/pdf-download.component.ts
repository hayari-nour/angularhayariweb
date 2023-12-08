import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-pdf-download',
  standalone:true,
  imports: [MatIconModule],
  templateUrl: './pdf-download.component.html',
  styleUrls: ['./pdf-download.component.css']
})
export class PdfDownloadComponent {

  
  constructor(private http: HttpClient) {}
    /*constructor(private http: HttpClient,
      private matIconRegistry: MatIconRegistry,
      private domSanitizer: DomSanitizer) {
      this.matIconRegistry.addSvgIcon(
        "download",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/downloadfile.svg")
      );
    }*/
 




  downloadPdf() {
    const pdfUrl = '/assets/cv_hayari.pdf'; // Remplacez 'fichier.pdf' par le nom de votre fichier
    this.http.get(pdfUrl, { responseType: 'arraybuffer' }).subscribe((data) => {
      this.savePdf(data, 'fichier.pdf');
    });
  }

  private savePdf(data: ArrayBuffer, fileName: string) {
    const blob = new Blob([data], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
}
