import { Observable, Subject } from 'rxjs';

export interface CacheService {
  get(key: string, fetcher?: (...args: any[]) => Observable<any>, maxAge?: number): Observable<any> | Subject<any>;
  set(key: string, value: any, maxAge?: number): void;
  has(key: string): boolean;
}
