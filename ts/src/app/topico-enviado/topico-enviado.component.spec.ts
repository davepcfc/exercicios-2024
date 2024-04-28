import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicoEnviadoComponent } from './topico-enviado.component';

describe('TopicoEnviadoComponent', () => {
  let component: TopicoEnviadoComponent;
  let fixture: ComponentFixture<TopicoEnviadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicoEnviadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicoEnviadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
