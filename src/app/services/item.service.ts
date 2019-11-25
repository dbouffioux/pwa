import { Injectable } from '@angular/core';
import {ItemModel} from '../models/item.model';
import {NgxIndexedDBService} from 'ngx-indexed-db';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private dbService: NgxIndexedDBService) {
    dbService.currentStore = 'item';
  }

  public getAllItems(): Promise<ItemModel[]> {
    return this.dbService.getAll();
  }

  public addItem(item: ItemModel): Promise<unknown> {
    return this.dbService.add(item);
  }

  public deleteItem(item: ItemModel): Promise<unknown> {
    return this.dbService.delete(item.id);
  }
}
