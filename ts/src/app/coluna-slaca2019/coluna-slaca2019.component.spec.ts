import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColunaSlaca2019Component } from './coluna-slaca2019.component';

describe('ColunaSlaca2019Component', () => {
  let component: ColunaSlaca2019Component;
  let fixture: ComponentFixture<ColunaSlaca2019Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColunaSlaca2019Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColunaSlaca2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
