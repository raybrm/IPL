
public class ConcreteObserverBelgique implements Observer {
	
	private int nbrBelgique = 0;
	
	@Override
	public void update(String ligne) {
		if (ligne.contains("Belgique")) {
			nbrBelgique++;
		}
	}

	@Override
	public void update() {
		System.out.println("Il y avait " + nbrBelgique + " lignes contenant Belgique.");
	}

}
