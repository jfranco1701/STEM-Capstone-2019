import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class SearchTermChangeService {

  private _searchTerm: Subject<string> = new Subject<string>();
  public searchTerm: Observable<string> = this._searchTerm.asObservable();
  private _clear: Subject<void> = new Subject<void>();
  public clear: Observable<void> = this._clear.asObservable();

  constructor() { }

  public notifySearchTerm(searchTerm: string): void {
    this._searchTerm.next(searchTerm);
  }

  public clearSearchTerm(): void {
    this._clear.next();
  }
}
