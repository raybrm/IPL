package FactoryMethod;

// Simple héritage
public class Livre extends Produit {
	
	public static final double PRIX=14.99;
	
	public Livre(String name, int anneeDeParution) {
		super(name, anneeDeParution, PRIX);
	}
}