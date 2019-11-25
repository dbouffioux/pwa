import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ItemModel } from '../../models/item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() public item: ItemModel;
  @Output() private deleteEmitter = new EventEmitter<ItemModel>();

  constructor() { }

  ngOnInit() {
  }

  deleteItem(item: ItemModel) {
    this.deleteEmitter.emit(item);
  }
}
