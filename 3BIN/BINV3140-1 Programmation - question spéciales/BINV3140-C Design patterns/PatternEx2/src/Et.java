
// Composite aussi
public class Et implements Strategy {
	
	private Strategy[] strategies;
	
	public Et(Strategy... strategies) { // met toutes les stratégies dans un tableau
		this.strategies = strategies;
	}
	
	@Override
	public boolean verifierMots(String mot) {
		boolean out = true;
		for (Strategy str : strategies) {
			out = out && str.verifierMots(mot);
		}
		return out;
	}

	
	
}
