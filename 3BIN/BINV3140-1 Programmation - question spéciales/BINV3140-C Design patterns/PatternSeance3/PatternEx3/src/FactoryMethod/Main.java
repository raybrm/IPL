package FactoryMethod;

public class Main {

	public static void main(String[] args) {
		
		MagasinLivre factoryLivre = new MagasinLivre();
		factoryLivre.ajouterProduit("Harry Potter", 1997);
		factoryLivre.ajouterProduit("IPL book", 2020);
		
		System.out.println(factoryLivre.retourneProduit("IPL book").getName());
	}

}
