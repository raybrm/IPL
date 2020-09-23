
public class Decorator implements Strategy {
	
	private int compteur = 0;
	private Strategy strategie;
	
	public Decorator(Strategy strategie) {
		this.strategie = strategie;
	}
	
	@Override
	public boolean verifierMots(String mot) {
		boolean out = this.strategie.verifierMots(mot);
		if (out)
			compteur++;
		return out;
	}
	
	public int getComteur() {
		return compteur; 
	}
	
	
}
