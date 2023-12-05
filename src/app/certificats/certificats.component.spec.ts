import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatsComponent } from './certificats.component';

describe('CertificatsComponent', () => {
  let component: CertificatsComponent;
  let fixture: ComponentFixture<CertificatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CertificatsComponent]
    });
    fixture = TestBed.createComponent(CertificatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
