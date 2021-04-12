package FactoryMethod;
import java.util.HashMap;
import java.util.Map;


public abstract class Magasin {
	
	private Map<String,Produit> bac = new HashMap<String,Produit>();
	
	public void ajouterProduit(String name, int anneeDeParution){ // Template methode
		Produit produit = createProduit(name, anneeDeParution);
		bac.put(name, produit);
	}
	
	public Produit retourneProduit(String name){
		return bac.get(name);
	}
	
	public abstract Produit createProduit(String name, int anneeDeParution); // PrimitiveOperation
}
