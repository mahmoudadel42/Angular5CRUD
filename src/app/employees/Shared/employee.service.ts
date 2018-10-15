import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
//import { observable } from 'rxjs/observable';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  selectEmployee : Employee;
  constructor(private http : Http) {
    this.selectEmployee={
      EmployeeID:null,
      FirstName:'',
      LastName:'',
      EmpCode: '',
      Office: '',
      Position:''
    }
   }

   postEmployee(emp : Employee){
     var body = JSON.stringify(emp);
     var headerOptions = new Headers({'content-type' : 'application/json'});
    
     var requestOption = new RequestOptions({method: RequestMethod.Post, headers:headerOptions});
     debugger;
     return this.http.post('http://localhost:1963/api/employees/PostEmployee',body,requestOption).pipe(map(res => res.json()));
   }
}
