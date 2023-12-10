import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Universite } from 'src/app/models/universite';
import { HttpClient } from '@angular/common/http';
import { Foyeraff } from '../models/foyer';
@Injectable({
  providedIn: 'root'
})
export class UniversiteService {

  constructor(private _http:HttpClient) { 
    console.log("je suis user service ")
  }
  addUniversiteFromDb(universite:Universite):Observable<Universite>{
    return this._http.post<Universite>("http://localhost:8087/mon-application/ajouteruniversite",universite)
  }
  getUniversiterFromDB():Observable<Universite[]>{
    return this._http.get<Universite[]>("http://localhost:8087/mon-application/getalluniverite");
  }
  UpdateUniversite(universite:Universite):Observable<Universite>{
    return this._http.put<Universite>("http://localhost:8087/mon-application/uppdateuniversit",universite);
  }
  deleteUniversiteFromDb(iduniveriste:number):Observable<void>{
    return this._http.delete<void>("http://localhost:8087/mon-application/deleteuniversite/"+iduniveriste);
  }
  getUniversiteById(idUniversite:number):Observable<Universite>{
    return this._http.get<Universite>("http://localhost:8087/mon-application/getuniversitebyid/"+idUniversite);
  }
  getFoyerNotAssigned():Observable<Foyeraff[]>{
    return this._http.get<Foyeraff[]>("http://localhost:8087/mon-application/getfoyernotaffected");
  }
  
}
