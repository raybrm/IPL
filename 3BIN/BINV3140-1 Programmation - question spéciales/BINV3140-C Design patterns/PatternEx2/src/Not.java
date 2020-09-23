
public class Not implements Strategy {
	
	private Strategy strategy1;
	
	public Not(Strategy strategy1, Strategy strategy2) {
		this.strategy1 = strategy1;
	}
	
	@Override
	public boolean verifierMots(String mot) {
		return !strategy1.verifierMots(mot);
	}
}
