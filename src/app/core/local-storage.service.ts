import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private readonly keyPrefix = 'wc';

  set(key: string, value: any): void {
    localStorage.setItem(`${this.keyPrefix}-${key}`, JSON.stringify(value));
  }

  get(key: string): any {
    const value: string | null = localStorage.getItem(`${this.keyPrefix}-${key}`);
    if (!value) {
      return null;
    }
    return JSON.parse(value);
  }
}
