import { Component } from '@angular/core';
import { DialogWindowComponent } from '../dialog-window/dialog-window.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

@Component({
    selector: 'app-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss']
})

export class SideNavComponent {

    constructor(public dialog: MatDialog) {
    }

    public openDialog(): void {
        const dialogRef = this.dialog.open(DialogWindowComponent, {
            height: '400px',
            width: '600px'
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
}
