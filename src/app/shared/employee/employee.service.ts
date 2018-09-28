import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'﻿

@Injectable()
export class EmployeeService {

  constructor(private http: HttpClient) {
  }

  getAllEmployees(): Observable<any> {
    return this.http.get('//localhost:9000/employees/all')
                      .pipe(catchError(this.errorHandler));
  }
  getEmployee(id): any {
    return this.http.get('//localhost:9000/employees/' + id)
                    .pipe(catchError(this.errorHandler));
              
  } 

  private errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }
}