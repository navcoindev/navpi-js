import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginServiceStub {

  constructor(

  ) { }

  handleLogin() {
    return true;
  }

}