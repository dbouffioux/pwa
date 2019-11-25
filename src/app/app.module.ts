import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ItemFormComponent } from './component/item-form/item-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ItemListComponent } from './component/item-list/item-list.component';
import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';
import { ItemContainerComponent } from './container/item-container/item-container.component';
import { ItemComponent } from './component/item/item.component';
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {WebcamModule} from "ngx-webcam";
import {MatCardModule} from "@angular/material/card";

const dbConfig: DBConfig = {name: 'MyDb', version: 1, objectStoresMeta: [
    {
      store: 'item',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'title', keypath: 'title', options: { unique: false } },
        { name: 'description', keypath: 'description', options: { unique: false } }
      ]
    }
  ]};

@NgModule({
  declarations: [
    AppComponent,
    ItemFormComponent,
    ItemListComponent,
    ItemContainerComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgxIndexedDBModule.forRoot(dbConfig),
    MatButtonModule,
    MatDialogModule,
    WebcamModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ItemFormComponent
  ]
})
export class AppModule { }
