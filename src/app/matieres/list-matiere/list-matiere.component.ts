import { Component, OnInit } from '@angular/core';
import {Matiere} from "../../../Models/Matiere";
import {MatTableDataSource} from "@angular/material";
import {BackEndServiceService} from "../../DA/back-end-service.service";
import swal from "sweetalert2";

@Component({
  selector: 'app-list-matiere',
  templateUrl: './list-matiere.component.html',
  styleUrls: ['./list-matiere.component.scss']
})
export class ListMatiereComponent implements OnInit {

  private Matieres : Matiere [] = [] ;
  public filtreDataSource = new MatTableDataSource(this.Matieres);
  displayedColumns = ['intitulé','Delete','Edit'];
  constructor(private backend:BackEndServiceService) {
  }

  ngOnInit() {
    this.backend.getAllMatieres(0,0).then(result => {

      this.filtreDataSource.data = result;
    });
  }

  onButtonDeleteClick(id: string) {
    swal({
      title: 'Vous etes sûr?',
      text: "Cette action est irreversible",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#08a414',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer cette Matiere',
      cancelButtonText: 'annuler'
    }).then((result) => {
      if (result.value) {
        this.backend.deleteMatiere(id).then(result => {
          for (var i = 0; i < this.filtreDataSource.data.length; i++) {
            if (this.filtreDataSource.data[i]._id == id) {
              this.filtreDataSource.data.splice(i, 1);
              break;
            }
          }
          swal({
            title: 'Supprimé',
            text: "Matiere a été supprimé",
            type: 'success',
            showConfirmButton: false,
            timer: 3000,
          });
          this.filtreDataSource = new MatTableDataSource(this.filtreDataSource.data); //workaround for refreshing the table after delete
        });
      }
    });
  }

  onButtonEditClick(id: string) {
    console.log(id);
  }


}
