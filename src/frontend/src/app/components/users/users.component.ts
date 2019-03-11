import { Component, OnInit } from '@angular/core';
import {
  NgrxJsonApiService, QueryResult,
  NGRX_JSON_API_DEFAULT_ZONE,
  Query, Direction
} from 'ngrx-json-api';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public queryResults: Observable<QueryResult>;
  results: any;
  resource: any;


  constructor(private ngrxJsonApiService: NgrxJsonApiService) { }

  ngOnInit() {
    this.results = [];
    this.resource = [];
  }

  getUsers() {
       // a zone represents an independent json-api instance
       const zone = this.ngrxJsonApiService.getZone(NGRX_JSON_API_DEFAULT_ZONE);

       const query: Query = {
         type: 'users',
         queryId: 'myQuery',
       };

       zone.putQuery({
         query,
         fromServer: true // you may also query locally from contents in the store, e.g. new resource
       });

       // select observable to query result holding the loading state and (future) results
       const denormalise = true;
       this.queryResults = this.ngrxJsonApiService.selectManyResults(query.queryId, denormalise);

       this.queryResults.subscribe(it => this.results = it);
  }
}

