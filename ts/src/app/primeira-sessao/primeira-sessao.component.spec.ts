import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiraSessaoComponent } from './primeira-sessao.component';

describe('PrimeiraSessaoComponent', () => {
  let component: PrimeiraSessaoComponent;
  let fixture: ComponentFixture<PrimeiraSessaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeiraSessaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeiraSessaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
