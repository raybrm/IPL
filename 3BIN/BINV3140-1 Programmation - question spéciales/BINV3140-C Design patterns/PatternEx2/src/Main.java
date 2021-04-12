import java.io.IOException;

public class Main {
	public static void main(String[] args) {
		
		ListerMots lm = new ListerMots("test.txt");
		
		Strategy stT = new TStrategy();
		Strategy stPlaindrome = new PalindromeStrategy();
		Strategy stLongueur = new LongueurStrategy(4);
		
		Strategy or = new Or(stT, stLongueur);
		Decorator sttt = new Decorator(stT); // le decorator est du même type que l'interface
		
		try {
			lm.lister(sttt);
			System.out.println(sttt.getComteur());
		} catch (IOException e) {
			e.printStackTrace();
		}
		
	}
}
