import { Component, OnInit } from '@angular/core';
import {UniversalUserForm} from "../../../Models/UniversalUserForm";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
public currentUser:UniversalUserForm;
  constructor() { }

  ngOnInit() {
    this.currentUser=JSON.parse(localStorage.getItem("currentUser"));
  }

}
