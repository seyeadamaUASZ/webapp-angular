import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../assets/environment";
import {Employee} from "../employee-list/employee.model";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 api_server:string=environment.api;
  constructor(private http:HttpClient) { }

  getEmployees(){
    return this.http.get<Employee[]>(this.api_server+'/list')
  }

  getEmployeeById(id:any){
    return this.http.get<Employee>(this.api_server+'/'+id);
  }

  updateEmployee(employee: Employee) {
    return this.http.post<Employee>(this.api_server+'/update', employee);
  }

  createEmployee(employee: Employee) {
    return this.http.post<Employee[]>(this.api_server+'/create', employee);
  }

  deleteEmployee(id:any) {
    return this.http.delete(this.api_server+'/delete/id');
  }

}
