import { TestBed } from '@angular/core/testing';

import { CursoProviderService } from './curso-provider.service';

describe('CursoProviderService', () => {
  let service: CursoProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursoProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
