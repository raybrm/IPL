package AbstractFactory;

public class DVDFactory implements AbstractFactory{

	@Override
	public Produit creatProduit(String name, int anneeDeParution) {
		return new DVD(name, anneeDeParution);
	}
	
}
