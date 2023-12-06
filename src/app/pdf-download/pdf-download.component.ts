import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-pdf-download',
  standalone:true,
  imports: [MatIconModule],
  templateUrl: './pdf-download.component.html',
  styleUrls: ['./pdf-download.component.css']
})
export class PdfDownloadComponent {
/*
}
@Component({
  selector: 'app-pdf-download',
  template: `
    <button (click)="downloadPdf()">Télécharger le PDF</button>
  `,
})
export class PdfDownloadComponent {
  */
  constructor(private http: HttpClient) {}

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
