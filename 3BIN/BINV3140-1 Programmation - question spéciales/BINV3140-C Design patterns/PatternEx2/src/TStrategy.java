/**
 * Lister les mots commen�ant par 't'
 * @author Rayan
 *
 */
public class TStrategy implements Strategy {

	@Override
	public boolean verifierMots(String mot) {
		return mot.charAt(0) == 't';
	}
	
}
