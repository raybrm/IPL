/**
 * Lister les mots étant des palindromes
 * @author rayan
 *
 */
public class PalindromeStrategy implements Strategy {

	@Override
	public boolean verifierMots(String mot) {
		if (mot == null)
			return false;
		StringBuffer stringbuffer = new StringBuffer(mot);
		return mot.equals(stringbuffer.reverse().toString());
	}

}
