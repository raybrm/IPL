package FactoryMethod;

public class MagasinLivre extends Magasin{
	
	public Produit createProduit(String name, int anneeDeParution) {
		return new Livre(name, anneeDeParution);
	}
}
