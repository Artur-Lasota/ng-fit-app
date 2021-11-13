import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DialogWindowComponent } from '../dialog-window/dialog-window.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss']
})

export class SideNavComponent {

    @Output()
    public selectedItem: EventEmitter<any> = new EventEmitter();
    @Input()
    public items: any[] = [];

        constructor(public dialog: MatDialog) {
    }

    public selectItem(item: any): void{
        this.selectedItem.emit(item);
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
