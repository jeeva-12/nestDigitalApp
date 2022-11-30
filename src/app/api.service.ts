import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  fetchCourse = () =>
  {
    return this.http.get("https://mylinkurcodesapp.herokuapp.com/getcourses")
  }
  addCourse =(dataToSend:any) =>
  {
    return this.http.post("https://mylinkurcodesapp.herokuapp.com/addcourse",dataToSend)
  }

  fetchfrnd =()=>
  {
    return this.http.get("https://dummyapifriends.herokuapp.com/view")
  }
  addfrnd=(dataToSend:any)=>
  {
    return this.http.post("https://dummyapifriends.herokuapp.com/adddata",dataToSend)
  }
}
