import { Injectable } from "@angular/core";
import { Produit } from "src/model/produit";
import { Composition } from "src/model/composition";

@Injectable({
  providedIn: "root"
})
export abstract class AlimentationService {
  abstract getProduits(): Promise<Produit[]>;
  abstract getComposition(p: Produit): Promise<Composition[]>;
}
