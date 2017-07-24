///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>

import { Injectable } from 'angular2/core';
import {Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

import { Employee }    from '../models/employee';

@Injectable()
export class EmployeeDetailServiceComponent {
  constructor(private http: Http) { }

  private _employeesUrl: string = 'http://localhost:3000/employees/';

  getEmployee (id: number): Observable<Employee>  {
    this._employeesUrl += id;

    return this.http.get(this._employeesUrl)
                    .map(res => this._log(res))
                    .catch(this._handleError);
  }

  private _handleError (error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

  private _log(res): Employee {
    return res.json();
  }
}
