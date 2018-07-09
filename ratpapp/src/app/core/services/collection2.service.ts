import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../../shared/interfaces/item';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Collection2Service {

  private _collection: Observable<Item[]>;
  // tslint:disable-next-line:max-line-length
  private Url = 'api/https://data.ratp.fr/api/records/1.0/search/?dataset=liste-des-commerces-de-proximite-agrees-ratp&sort=code_postal&facet=tco_libelle&facet=code_postal';
  constructor(private http: HttpClient) {
  this.collection = this.http.get<Item[]>(this.Url);
  }

  /**
   * get collection
   */
  public get collection(): Observable<Item[]> {
    return this._collection;
  }
  /**
   * set collection
   */
  public set collection(col: Observable<Item[]>) {
    this._collection = col;
  }
}
