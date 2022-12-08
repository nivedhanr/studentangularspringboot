import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  addStudent=(datatosend:any)=>
  {
    return this.http.post("http://localhost:8080/add",datatosend)
  }
  viewStudent =()=>
  {
    return this.http.get("http://localhost:8080/view")
  }
  readValues=(datatosend:any)=>

  {

    return this.http.post("http://localhost:8080/search",datatosend)

  }
  deleteEmployee=(datatosend:any)=>{
    return this.http.post("http://localhost:8080/delete",datatosend)
  }
}
