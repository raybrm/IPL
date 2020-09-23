
public class ConcreteObserverMots implements Observer{
	
	private int nbrMots = 0;
	
	@Override
	public void update() {
		System.out.println("Il y avait " + nbrMots + " mots.");
	}

	@Override
	public void update(String ligne) {
		for (String mot : ligne.trim().split(" ")) {
			nbrMots++;
		}
		
	}
	

}
