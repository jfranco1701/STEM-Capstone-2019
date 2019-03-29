import { throwError as observableThrowError, Subject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CacheContent } from './cache-content';
import { CacheService } from './cache-service';

import { Injectable } from '@angular/core';

/**
 * This service can be provided to another cacheable entity service to provide
* rudimentary caching using RxJs observables.
 *
 * See: https://hackernoon.com/angular-simple-in-memory-cache-service-on-the-ui-with-rxjs-77f167387e39
 */
@Injectable()
export class InMemoryCacheService implements CacheService {

  /**
   * Duration to retain cached result from API.
   * This value is used if a specific `maxAge` isn't
   * provided in the `.get()` call.
   *
   * Default: 10 Minutes (600000ms)
   */
  readonly DEFAULT_CACHE_AGE = 600 * 1000; // 10 minutes

  private cache = new Map<string, CacheContent>();
  private observables = new Map<string, Subject<any>>();

  constructor() { }

  /**
   * If exists in our in-memory cache, that value is returned.
   * If the cache has expired, the `fetcher` function
   * will be executed, and the value stored in cache for next
   * `get()` request with the `maxAge` set as expiration from now.
   * @param key Url or other key to identify cache entry
   * @param fetcher Observable fallback value for HTTP retrievals
   * @param maxAge Milliseconds after current time before expiration
   */
  get<T>(key: string, fetcher?: (...args: any[]) => Observable<any>, maxAge?: number): Observable<T> | Subject<T> {
    if (this.hasValidCachedValue(key)) {
      return of(this.cache.get(key).value as T);
    }
    if (isNaN(maxAge)) {
      maxAge = this.DEFAULT_CACHE_AGE;
    }
    if (this.observables.has(key)) {
      return this.observables.get(key);
    } else if (fetcher) {
      this.observables.set(key, new Subject());
      return fetcher().pipe(tap<T>((value: T) => {
        this.set(key, value, maxAge);
      }));
    } else {
      return observableThrowError('Requested key is not available in cache');
    }
  }
  set<T>(key: string, value: T, maxAge: number = this.DEFAULT_CACHE_AGE): void {
    this.cache.set(key, { value: value, expiry: Date.now() + maxAge });
    this.notifyPendingObservers(key, value);
  }

  has(key: string): boolean {
    return this.cache.has(key);
  }

  /**
   * Publishes the value to all observers of the given
   * in progress observables if observers exist.
   */
  private notifyPendingObservers<T>(key: string, value: T): void {
    if (this.observables.has(key)) {
      const pendingRequest = this.observables.get(key);
      const observersCount = pendingRequest.observers.length;
      if (observersCount) {
        pendingRequest.next(value);
      }
      pendingRequest.complete();
      this.observables.delete(key);
    }
  }

  private hasValidCachedValue(key: string): boolean {
    if (this.has(key)) {
      if (this.cache.get(key).expiry <= Date.now()) {
        this.cache.delete(key);
        return false;
      }
      return true;
    } else {
      return false;
    }
  }
}
