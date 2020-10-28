package AbstractFactory;

public class Main {
	
	/**
	 * Petit commentaire : une strat�gie qui cr�e des objets uniquement est une Abstract Factory
	 * Pareil pour la template method : une template m�thode qui cr�e uniquement des objets est une Factory method
	 * @param args
	 */
	public static void main(String[] args) {
		
		AbstractFactory factoryDVD = new DVDFactory();
		AbstractFactory factoryLivre = new LivreFactory();
		
		Magasin magasinDVD =  new Magasin(factoryDVD);
		Magasin magasinLivre = new Magasin(factoryLivre);
		
		magasinDVD.ajouterProduit("Hobbit", 2014);
		magasinDVD.ajouterProduit("Hobbit 2", 2017);
		
		magasinLivre.ajouterProduit("the Witcher", 2014);
		magasinLivre.ajouterProduit("The wicther 2", 2019);
		
		
	}

}
