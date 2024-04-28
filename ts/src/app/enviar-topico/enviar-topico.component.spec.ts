import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarTopicoComponent } from './enviar-topico.component';

describe('EnviarTopicoComponent', () => {
  let component: EnviarTopicoComponent;
  let fixture: ComponentFixture<EnviarTopicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnviarTopicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnviarTopicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
