import { Injectable } from '@angular/core';
// noinspection JSDeprecatedSymbols
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  private _albumUrl = '../assets/album.json';

// noinspection JSDeprecatedSymbols
  constructor(private _http: Http) { }

  getAlbum(id: number) {
    return this._http.get(this._albumUrl)
      .map(response => response.json())
  }
}
