import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ItemModel} from '../../models/item.model';
import {ItemFormComponent} from '../item-form/item-form.component';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  @Input() public items: ItemModel[];
  @Output() private createItem: EventEmitter<ItemModel> = new EventEmitter<ItemModel>();
  @Output() private deleteEmitter: EventEmitter<ItemModel> = new EventEmitter<ItemModel>();

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  public openDialog() {
    const dialogRef = this.dialog.open(ItemFormComponent, {
      height: '450px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe((result: ItemModel) => {
        this.createItem.emit(result);
    });
  }

  public deleteItem(item: ItemModel) {
    this.deleteEmitter.emit(item);
  }
}
