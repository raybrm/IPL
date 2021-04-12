import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.StringTokenizer;

/**
 * Context 
 * @author rayan
 *
 */
public class ListerMots {
	
	private String fichier;
	
	public ListerMots(String fichier) {
		this.fichier = fichier;
	}
	
	//Contient tout le code commun
	// Lit le fichier 
	public void lister(Strategy st) throws IOException {
		BufferedReader input = new BufferedReader(new FileReader(this.fichier));
		String buffer = null;
		while ((buffer = input.readLine()) != null) {
			StringTokenizer mots = new StringTokenizer(buffer, " \t.;(){}\"'*=:!/\\");
			while (mots.hasMoreTokens()) {
				String mot = mots.nextToken();
				if (st.verifierMots(mot))
					System.out.println(mot);
			}
		}
	}

}
