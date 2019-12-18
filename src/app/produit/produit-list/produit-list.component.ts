import { Component, OnInit } from "@angular/core";
import { AlimentationService } from "src/service/alimentation.service";
import { Produit } from "src/model/produit";
import { Composition } from "src/model/composition";

@Component({
  selector: "produit-list",
  templateUrl: "./produit-list.component.html",
  styleUrls: ["./produit-list.component.scss"]
})
export class ProduitListComponent implements OnInit {
  constructor(private service: AlimentationService) {}
  produitsAffichees: Produit[];
  compositions: Composition[];

  ngOnInit() {
    this.service.getProduits().then(liste => {
      this.produitsAffichees = liste;
    });
  }
}
