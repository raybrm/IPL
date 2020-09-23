
// Composite
public class And implements Strategy{
	
	private Strategy strategy1;
	private Strategy strategy2;
	
	public And(Strategy strategy1, Strategy strategy2) {
		this.strategy1 = strategy1;
		this.strategy2 = strategy2;
	}

	@Override
	public boolean verifierMots(String mot) {	
		return strategy1.verifierMots(mot) && strategy2.verifierMots(mot);
	}
}
