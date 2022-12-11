import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})

export class UserListService {
users: any = [];
_root_url = "https://jsonplaceholder.typicode.com/users";
  constructor(private http: HttpClient) { }

  getUsers():Observable<any>{

    return this.http.get<any>(this._root_url);

}

getUsersById(id:any):Observable<any>{
return this.http.get<any>(`${this._root_url}/${id}`);
}
}
