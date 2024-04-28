import { TestBed } from '@angular/core/testing';

import { TrocarComponentesService } from './trocar-componentes.service';

describe('TrocarComponentesService', () => {
  let service: TrocarComponentesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrocarComponentesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
