package validation;

import domaine.CarteDeCredit;

import java.util.Calendar;

public class MasterCadrHandler extends Generateur{
    public MasterCadrHandler(Generateur successeur) {
        super(successeur);
    }

    @Override
    public boolean valider(String numero) {
        return false;
    }

    @Override
    public CarteDeCredit creerCarte(String numero, Calendar dateExpiration, String nom) {
        return null;
    }
}
