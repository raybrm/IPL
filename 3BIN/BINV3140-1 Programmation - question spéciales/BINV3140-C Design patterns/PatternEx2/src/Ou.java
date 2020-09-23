
// Composite
public class Ou implements Strategy {
	
	Strategy[] strategies;
	
	public Ou(Strategy...strategies) {
		this.strategies = strategies;
	}
	
	@Override
	public boolean verifierMots(String mot) {
		boolean out = true;
		
		for (Strategy str : strategies) {
			out = out || str.verifierMots(mot);
		}
		
		return out;
	}
	
}
