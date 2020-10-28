package AbstractFactory;

public class LivreFactory implements AbstractFactory {

	@Override
	public Produit creatProduit(String name, int anneeDeParution) {
		return new Livre(name, anneeDeParution);
	}

}
