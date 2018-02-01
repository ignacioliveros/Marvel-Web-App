import { TestBed, inject } from '@angular/core/testing';

import { HeroService } from './heros.service';

describe('HerosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroService]
    });
  });

  it('should be created', inject([HeroService], (service: HeroService) => {
    expect(service).toBeTruthy();
  }));
});
