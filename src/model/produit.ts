export class Produit {
  constructor(nom: string) {
    this.nom = nom;
  }
  id: string;

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

  description: string;
  prix: number;
  categorie: string;
  ingredients: any[];
  gluten: boolean;
  imageUrl: string;
}
