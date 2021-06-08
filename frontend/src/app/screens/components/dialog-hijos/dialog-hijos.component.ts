import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  rut: string;
}


@Component({
  selector: 'app-dialog-hijos',
  templateUrl: './dialog-hijos.component.html',
  styleUrls: ['./dialog-hijos.component.css']
})
export class DialogHijosComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogHijosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
