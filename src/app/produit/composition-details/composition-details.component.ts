import { Component, OnInit, Input } from "@angular/core";
import { AlimentationService } from "src/service/alimentation.service";
import { Produit } from "src/model/produit";
import { Composition } from "src/model/composition";

@Component({
  selector: "app-composition-details",
  templateUrl: "./composition-details.component.html",
  styleUrls: ["./composition-details.component.scss"]
})
export class CompositionDetailsComponent implements OnInit {
  constructor(private service: AlimentationService) {}

  prod
  
  @Input()
  produit: Produit;

  compositions: Composition[];
  ngOnInit() {
    this.service.getComposition(this.produit).then(composant => {
      this.compositions = composant;
    });
  }
}
