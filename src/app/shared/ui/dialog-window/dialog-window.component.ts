import { Component, OnInit } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';

@Component({
  selector: 'app-dialog-window',
  templateUrl: './dialog-window.component.html',
  styleUrls: ['./dialog-window.component.scss']
})
export class DialogWindowComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogWindowComponent>) { }

  public ngOnInit(): void {
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }

}
