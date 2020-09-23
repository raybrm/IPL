
public class ConcreteObserverLignes implements Observer {
	
	private int nbrLignes;
	
	@Override
	public void update() {
		System.out.println("Il y avait " + nbrLignes + " lignes.");
	}

	@Override
	public void update(String ligne) {
		nbrLignes++;
	}

}
