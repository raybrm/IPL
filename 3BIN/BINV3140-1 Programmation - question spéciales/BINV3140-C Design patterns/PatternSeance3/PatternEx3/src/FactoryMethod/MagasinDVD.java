package FactoryMethod;

// Class concrete
public class MagasinDVD extends Magasin{
	
	public Produit createProduit(String name, int anneeDeParution) {
		return new DVD(name, anneeDeParution);
	}
}
