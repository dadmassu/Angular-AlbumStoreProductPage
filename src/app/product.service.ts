import { Injectable } from '@angular/core';
// noinspection JSDeprecatedSymbols
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { Album } from './album';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProductService {

  private _albumUrl = '../assets/album.json';

// noinspection JSDeprecatedSymbols
  constructor(private _http: Http) { }

  getAlbum(id: number): Observable<Album> {
    return this._http.get(this._albumUrl)
      .map(response => <Album> response.json())
  }
}
