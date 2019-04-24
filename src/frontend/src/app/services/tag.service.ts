import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, retry } from 'rxjs/operators';
import { Tag } from '../models/tag';
import { Cacheable } from 'ngx-cacheable';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  private tagApiUrl: string;

  constructor(private http: HttpClient) {
    this.tagApiUrl = environment.tagsApiUrl;
  }

  @Cacheable()
  getTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(this.tagApiUrl);
  }
}
