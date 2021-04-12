/**
 * Lister les mots d'une longueur précise.
 * @author rayan
 *
 */
// Feuille
public class LongueurStrategy implements Strategy {
	
	private int longueur;
	
	public LongueurStrategy(int longueur) {
		this.longueur = longueur;
	}
	@Override
	public boolean verifierMots(String mot) {
		return mot.length() == this.longueur;
	}

}
