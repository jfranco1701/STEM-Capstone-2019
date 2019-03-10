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

  constructor(private ngrxJsonApiService: NgrxJsonApiService) { }

  ngOnInit() {
        // a zone represents an independent json-api instance
        const zone = this.ngrxJsonApiService.getZone(NGRX_JSON_API_DEFAULT_ZONE);

        // // add query to store to trigger request from server
        // const query: Query = {
        //   queryId: 'myQuery',
        //   type: 'projects',
        //   // id: '12' => add to query single item
        //   params: {
        //     fields: ['name'],
        //     include: ['tasks'],
        //     page: {
        //       offset: 20,
        //       limit: 10
        //     },
        //     // SortingParam[]
        //     sorting: [
        //       { api: 'name', direction: Direction.ASC }
        //     ],
        //     // FilteringParam[]
        //     filtering: [
        //       { path: 'name', operator: 'EQ', value: 'John' }
        //     ]
        //   }
        // };

        // zone.putQuery({
        //   query,
        //   fromServer: true // you may also query locally from contents in the store, e.g. new resource
        // });

        // // select observable to query result holding the loading state and (future) results
        // const denormalise = false;

        // this.queryResults = this.ngrxJsonApiService.selectManyResults(query.queryId, denormalise);
      }
}

