import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PreloaderService {

  private sectionLoad = new BehaviorSubject<object>({
    sectionRouter: '/',
    preloader: ''
  });

  // Watch on app.component
  sectionRequest = this.sectionLoad.asObservable();

  constructor() { }

  setSectionRouter(req) {
    this.sectionLoad.next(req);
  }

}
