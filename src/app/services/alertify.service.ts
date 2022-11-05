import { Injectable } from '@angular/core';
import * as alertiyfy from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

constructor() { }

success(message: string) {
  alertiyfy.success(message);
}

warning(message: string) {
  alertiyfy.warning(message);
}

error(message: string) {
  alertiyfy.error(message);
}

}
