
public class TStrategy implements Strategy {

	@Override
	public boolean verifierMots(String mot) {
		return mot.charAt(0) == 't';
	}
	
}
