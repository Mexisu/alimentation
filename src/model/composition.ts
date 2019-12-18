import { BoundElementPropertyAst } from "@angular/compiler";

export class Composition {
  private _nom: string;
  public get nom(): string {
    return this._nom;
  }
  public set nom(value: string) {
    if (!value) {
      throw new Error("Le nom doit être renseigné !");
    }
    this._nom = value;
  }
  quantite: number;
  bio: boolean;
}
