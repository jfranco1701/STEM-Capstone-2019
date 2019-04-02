import { Injectable } from '@angular/core';
import { Organization } from '../models/organization';
import { ORGANIZATIONS } from '../models/mock-organizations';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  constructor() { }

  getOrganizations(): Organization[] {
    return ORGANIZATIONS;
  }
}
