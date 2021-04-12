package domaine;

import java.util.Calendar;

public class Discover extends CarteDeCredit { // produit concret 

	public Discover(String numero, Calendar dateExpiration, String nom) {
		super(numero, dateExpiration, nom);
	}

	@Override
	public String getType() {
		return "Discover";
	}

}
