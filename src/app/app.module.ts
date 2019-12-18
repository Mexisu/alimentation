import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProduitListComponent } from "./produit/produit-list/produit-list.component";
import { AlimentationService } from "src/service/alimentation.service";
import { AlimentationDurService } from "src/service/alimentation-dur.service";
import { CompositionDetailsComponent } from './produit/composition-details/composition-details.component';
import { ProduitItemComponent } from './produit/produit-item/produit-item.component';

@NgModule({
  declarations: [AppComponent, ProduitListComponent, CompositionDetailsComponent, ProduitItemComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    { provide: AlimentationService, useClass: AlimentationDurService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
