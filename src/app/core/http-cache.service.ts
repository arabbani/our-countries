import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpCacheService {

  private requests: any = {};

  constructor() {
    this.init();
   }

  private init(): void {
    console.log('FGHJK')
  }

  put(url: string, response: HttpResponse<any>): void {
    if (!this.requests[url]) {
      this.requests[url] = response;
    }
  }

  get(url: string): HttpResponse<any> | undefined {
    return this.requests[url];
  }
}
