import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../shared/employee/employee.service';
import { isDefined } from '@angular/compiler/src/util';


@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})


export class EmployeeTableComponent implements OnInit {
  tableHidden : boolean = true;
  employees: Array<any>;
  employeeId: any;
  displayedColumns = [
  'Id', 
  'Name', 
  'Contract Type', 
  'Role Id',
  'Role Name',
  'Role Description',
  'Hourly Salary',
  'Monthly Salary',
  'Calculated Annual Salary'];
  errorMsg: any;
  constructor(private employeeService: EmployeeService) { }

  getEmployees() {
    if (undefined == this.employeeId || '' == this.employeeId){
      this.getAllEmployees();
    } else {
      this.getSpecificEmployee(this.employeeId);
    }
  }

  getAllEmployees(){
    this.employeeService.getAllEmployees().subscribe(data => {
        this.employees = data;
    });
    this.tableHidden = false;
  }
  getSpecificEmployee(id){
    this.employeeService. getEmployee(id).subscribe(
      data => {
        if (null != data){
        this.employees = Array.of(data);
        this.tableHidden = false;
        } else {
          this.tableHidden = true;
          alert("Employee not found");
        }
      }, error => {
        alert(error);
      }


    );
  }

  ngOnInit() {   
  }
}