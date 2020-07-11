import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';


@Injectable({
  providedIn: 'root'
})
export class HttpCacheService {

  private requests: any = {};

  constructor(private localStorageService: LocalStorageService) {
    // const cacehd = localStorageService.get('http-cache');
    // console.log('TT');
    // if (cacehd) {
    //   console.log('CACHE ', cacehd);
    //   this.requests = cacehd;
    // }
  }

  put(url: string, response: HttpResponse<any>): void {
    if (!this.requests[url]) {
      this.requests[url] = response;
      // this.localStorageService.set('http-cache', this.requests);
    }
  }

  get(url: string): HttpResponse<any> | undefined {
    return this.requests[url];
  }
}
