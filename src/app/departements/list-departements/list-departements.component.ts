import { Component, OnInit } from '@angular/core';
import {Departement} from "../../../Models/Departement";
import {MatTableDataSource} from "@angular/material";
import {BackEndServiceService} from "../../DA/back-end-service.service";
import swal from "sweetalert2";
@Component({
  selector: 'app-list-departements',
  templateUrl: './list-departements.component.html',
  styleUrls: ['./list-departements.component.scss']
})
export class ListDepartementsComponent implements OnInit {
  private departements: Departement[] = [];
  public departementDataSource = new MatTableDataSource(this.departements);
  displayedColumns = ['nom', 'chef departement','Enseignants', 'Delete', 'Edit'];
  constructor(private backend:BackEndServiceService) { }

  ngOnInit() {
    this.backend.getAllDepartement(0,0).then(result => {
      this.departementDataSource.data = result;
      console.log(this.departementDataSource.data);
    });
  }
  onButtonDeleteClick(id){

    swal({
      title: 'Vous etes sûr?',
      text: "Cette action est irreversible",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#08a414',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer ce departement',
      cancelButtonText: 'annuler'
    }).then((result) => {
      if (result.value) {
        this.backend.deleteDepartement(id).then(result => {
          for (var i = 0; i < this.departementDataSource.data.length; i++) {
            if (this.departementDataSource.data[i]._id == id) {
              this.departementDataSource.data.splice(i, 1);
              break;
            }
          }
          swal({
            title: 'Supprimé',
            text: "departement a été supprimé",
            type: 'success',
            showConfirmButton: false,
            timer: 3000,
          });
          this.departementDataSource = new MatTableDataSource(this.departementDataSource.data); //workaround for refreshing the table after delete
        });
      }
    });
}

}
