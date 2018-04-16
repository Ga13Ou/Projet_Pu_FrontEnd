import { Component, EventEmitter, Output } from '@angular/core';

import * as screenfull from 'screenfull';
import {BackEndServiceService} from "../../DA/back-end-service.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  @Output() toggleSidenav = new EventEmitter<void>();
  @Output() toggleNotificationSidenav = new EventEmitter<void>();

  constructor(private userService:BackEndServiceService) {
  }

  fullScreenToggle(): void {
    if (screenfull.enabled) {
      screenfull.toggle();
    }
  }
  logout(){
    this.userService.logout();
  }
}
