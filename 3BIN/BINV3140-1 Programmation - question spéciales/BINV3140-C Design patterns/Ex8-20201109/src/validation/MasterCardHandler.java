package validation;

import domaine.CarteDeCredit;
import domaine.MasterCard;

import java.util.Calendar;

public class MasterCardHandler extends Generateur{
    public MasterCardHandler(Generateur successeur) {
        super(successeur);
    }

    @Override
    public boolean valider(String numero) {
        int mcNumber = Integer.parseInt(numero.substring(0,2));
        return (mcNumber>50 && mcNumber <= 55) && numero.length() == 16;
    }

    @Override
    public CarteDeCredit creerCarte(String numero, Calendar dateExpiration, String nom) {
        if (valider(numero))
            return new MasterCard(numero, dateExpiration, nom);

        return super.creerCarte(numero, dateExpiration, nom);
    }
}
