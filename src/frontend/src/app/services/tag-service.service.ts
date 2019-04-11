import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tag } from '../models/tag';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  private tagApiUrl: string;
  private user: any;

  constructor(private http: HttpClient) {
    this.tagApiUrl = 'http://localhost:8000/api/v1/tags/';
    this.user;
  }

  getTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(this.tagApiUrl);
  }
}
