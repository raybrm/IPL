package AbstractFactory;
import java.util.HashMap;
import java.util.Map;

/**
 * Context
 * @author rayan
 *
 */
public class Magasin {
	
	private Map<String,Produit> bac = new HashMap<String,Produit>();
	private AbstractFactory strategy;
	
	public Magasin(AbstractFactory strategy) {
		this.strategy = strategy;
	}

	public void ajouterProduit(String name, int anneeDeParution){
		Produit produit = strategy.creatProduit(name, anneeDeParution);
		bac.put(name, produit);
	}
	
	public Produit retourneProduit(String name){
		return bac.get(name);
	}

}
