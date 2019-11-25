import { Component, OnInit } from '@angular/core';
import { ItemModel } from '../../models/item.model';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-item-container',
  templateUrl: './item-container.component.html',
  styleUrls: ['./item-container.component.scss']
})
export class ItemContainerComponent implements OnInit {

  public items: ItemModel[];

  constructor(private itemService: ItemService) {
  }

  ngOnInit() {
    this.refreshItemList();
  }

  public refreshItemList() {
    this.itemService.getAllItems().then( result => {
      this.items = result;
    });
  }

  public addItem(item: ItemModel): void {
    this.itemService.addItem(item).then(
      success => {
        this.refreshItemList();
      }
    );
  }

  public deleteItem(item: ItemModel): void {
    this.itemService.deleteItem(item).then( success => this.refreshItemList());
  }
}
