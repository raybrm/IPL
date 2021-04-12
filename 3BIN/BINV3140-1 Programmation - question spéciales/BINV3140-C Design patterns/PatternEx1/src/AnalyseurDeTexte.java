import java.io.IOException;

public class AnalyseurDeTexte {

	
	public static void main(String[] args) throws IOException {
		
		System.out.println("ici");
		Subject sub = new Subject("BelgiqueTexte.txt");
		// On peut appeler n'importe quel observer défini 
		Observer mots = new ConcreteObserverMots();
		Observer lignes = new ConcreteObserverLignes();
		Observer Palindromes = new ConcreteObserverPalindromes();
		Observer Belgique = new ConcreteObserverBelgique();
		sub.registerObserver(mots);
		sub.registerObserver(lignes);
		sub.registerObserver(Palindromes);
		sub.registerObserver(Belgique);
		sub.analyserTexte();

	}

}
