import { Component, OnInit, Input } from "@angular/core";
import { Produit } from "src/model/produit";

@Component({
  selector: "app-produit-item",
  templateUrl: "./produit-item.component.html",
  styleUrls: ["./produit-item.component.scss"]
})
export class ProduitItemComponent implements OnInit {
  constructor() {}

  @Input()
  produit: Produit;

  ngOnInit() {}
}
