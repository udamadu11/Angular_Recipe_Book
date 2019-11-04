import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecepeComponent } from './recepe/recepe.component';
import { RecepeListComponent } from './recepe/recepe-list/recepe-list.component';
import { RecepeItemComponent } from './recepe/recepe-item/recepe-item.component';
import { RecepeDetailsComponent } from './recepe/recepe-details/recepe-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecepeComponent,
    RecepeListComponent,
    RecepeItemComponent,
    RecepeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
