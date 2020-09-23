
public class ConcreteObserverPalindromes implements Observer {
	
	private int nbrPalindromes = 0;
	
	@Override
	public void update() {
		System.out.println("Il y avait " + nbrPalindromes + " palindromes.");
	}

	@Override
	public void update(String ligne) {
		for (String mot : ligne.trim().split(" ")) {
			StringBuffer temp = new StringBuffer(mot);
			if (mot.equals(temp.reverse().toString())) {
				nbrPalindromes++;
			}
		}
		
	}

}
