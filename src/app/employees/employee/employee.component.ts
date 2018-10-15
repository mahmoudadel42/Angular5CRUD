import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../Shared/employee.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public employeeService : EmployeeService) { }

  ngOnInit() {
    this.resetFrom()
  }
  
  resetFrom(form? :NgForm){
    if(form != null )
     {
        form.reset();
     }
    this.employeeService.selectEmployee={
      EmployeeID:null,
      FirstName:'',
      LastName:'',
      EmpCode: '',
      Office: '',
      Position:''
    }
  }
  onSubmit(form : NgForm){
    debugger;
    this.employeeService.postEmployee(form.value)
    .subscribe(data => {
      this.resetFrom(form);
    })
  }
}
