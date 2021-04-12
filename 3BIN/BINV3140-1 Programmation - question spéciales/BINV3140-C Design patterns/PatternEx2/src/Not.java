/**
 * Dans ce cas ci l'Icomponent c'est l'interface stratégie 
 * Le composite ce sont les classe OR, NOT, AND,.. ils vont donc contenir des Icomponent qui sont sois des feuilles
 * sois des Composite.
 * Lss feuilles ce sont les 3 stratégies (Tstrategy) 
 * @author rayan
 *
 */
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
