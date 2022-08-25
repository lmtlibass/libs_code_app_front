import { TestBed } from '@angular/core/testing';

import { ListeInscritService } from './liste-inscrit.service';

describe('ListeInscritService', () => {
  let service: ListeInscritService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListeInscritService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
