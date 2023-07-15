import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "../service/employee.service";
import {KeycloakService} from "../keycloak/keycloak.service";
import {NgxSpinnerService} from "ngx-spinner";
import {Router} from "@angular/router";
import {Employee} from "./employee.model";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit{
  employees?:Array<Employee>;
  constructor(
    private employeeS:EmployeeService,
    private keycloakS:KeycloakService,
    private ngxSpinner:NgxSpinnerService,
    private router:Router
  ) {
  }
  ngOnInit(): void {
    this.getEmployee();
  }

  editEmployee(id:any){

  }

  deleteEmployee(id:any){

  }

  createEmployee(){

  }

  logout(){
    this.keycloakS.logout();
  }

  private getEmployee(){
    this.ngxSpinner.show();
    this.employeeS.getEmployees().subscribe({
      next:(data)=>{
        this.employees=data;
        this.ngxSpinner.hide();
      },
      error:(error1)=>{
        this.ngxSpinner.hide();
      }
    })
  }

}
