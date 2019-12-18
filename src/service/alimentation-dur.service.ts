import { Injectable } from "@angular/core";
import { Produit } from "src/model/produit";
import { AlimentationService } from "./alimentation.service";
import { Composition } from "src/model/composition";

@Injectable({
  providedIn: "root"
})
export class AlimentationDurService extends AlimentationService {
  constructor() {
    super();
    //#region Generation Produits
    const p1 = new Produit("Cassoulet");
    p1.id = "1";
    p1.description =
      " spécialité régionale du Languedoc, à base de haricots secs, généralement blancs, et de viande";
    p1.categorie = "Plats";
    p1.gluten = false;
    p1.ingredients = ["haricots secs", "viande"];
    p1.imageUrl = "/assets/images/picture1.png";
    this.produits.push(p1);

    const p2 = new Produit("Bouillabaisse");
    p2.id = "2";
    p2.description = " spécialité régionale du Languedoc, bouillis de Poissons";
    p2.categorie = "Plats";
    p2.gluten = false;
    p2.ingredients = ["haricots secs", "poissons"];
    p2.imageUrl = "/assets/images/picture2.png";
    this.produits.push(p2);

    const p3 = new Produit("Cassoulet Toulousain");
    p3.id = "3";
    p3.description =
      " spécialité régionale du Languedoc, à base de haricots secs, généralement blancs, et de viande";
    p3.categorie = "Plats";
    p3.gluten = false;
    p3.ingredients = ["haricots secs", "viande"];
    p3.imageUrl = "/assets/images/picture3.png";
    this.produits.push(p3);

    //#endregion Generation Produits
  }

  produits: Produit[] = [];

  getProduits(): Promise<Produit[]> {
    return Promise.resolve(this.produits);
  }

  getComposition(p: Produit): Promise<Composition[]> {
    const compositions: Composition[] = [];
    for (let i = 0; i < 3; i++) {
      const c = new Composition();
      
      c.bio = false;
      c.quantite = Math.floor(Math.random() * (50 - 7)) + 7;
      compositions.push(c);
    }
    return Promise.resolve(compositions);
  }
}
