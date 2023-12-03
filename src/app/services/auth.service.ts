import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:3000';


  constructor(private http: HttpClient) { }

  addEmployee(data:any):Observable<any>{
    return this.http.post('http://localhost:3000/employees',data);
  }
  UpdateEmployee(id:number,data:any):Observable<any>{
    return this.http.put(`http://localhost:3000/employees/${id}`,data);
  }
  getEmployeeList():Observable<any>{
    return this.http.get('http://localhost:3000/employees');
  }
  deleteEmployee(id:number):Observable<any>{
    return this.http.delete(`http://localhost:3000/employees/${id}`);
  }
  registerUser(userDetails: User) {
    return this.http.post(`${this.baseUrl}/users`, userDetails);
  }

  getUserByEmail(email: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users?email=${email}`);
  }


}
