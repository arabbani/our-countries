import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HttpCacheService {

  private requests: any = {};

  constructor() {
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
