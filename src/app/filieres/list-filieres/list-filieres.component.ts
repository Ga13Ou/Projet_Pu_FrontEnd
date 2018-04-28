import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Filiere} from '../../../Models/Filiere';
import {BackEndServiceService} from '../../DA/back-end-service.service';
import swal from "sweetalert2";

@Component({
  selector: 'app-list-filieres',
  templateUrl: './list-filieres.component.html',
  styleUrls: ['./list-filieres.component.scss']
})
export class ListFilieresComponent implements OnInit {

  private filiers: Filiere[] = [];
  public filtreDataSource = new MatTableDataSource(this.filiers);
  displayedColumns = ['intitulé', 'niveau', 'groupe', 'Delete', 'Edit'];

  constructor(private backend:BackEndServiceService) {
  }

  ngOnInit() {
    this.backend.getAllFilieres(0,0).then(result => {
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
      confirmButtonText: 'Oui, supprimer cette filiere',
      cancelButtonText: 'annuler'
    }).then((result) => {
      if (result.value) {
        this.backend.deleteFiliere(id).then(result => {
          for (var i = 0; i < this.filtreDataSource.data.length; i++) {
            if (this.filtreDataSource.data[i]._id == id) {
              this.filtreDataSource.data.splice(i, 1);
              break;
            }
          }
          swal({
            title: 'Supprimé',
            text: "Filiere a été supprimé",
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
