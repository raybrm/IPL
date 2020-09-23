package client;
import java.util.GregorianCalendar;
import java.util.Iterator;

import be.ipl.film_database.domaine.*;
public class Test {


	public static void main(String[] args) {
		
		Acteur [] mesActeurs =  {
				new Acteur( "Assange", "Julian", new GregorianCalendar(3, 12, 1969), 187),
				new Acteur( "Paul", "Newmann", new GregorianCalendar(3, 12, 1969), 187),
				new Acteur( "Becker", "Norma Jean", new GregorianCalendar(3, 12, 1969), 187)
		};
		
		MetteurEnScene [] mesDirecteurs = {
				new MetteurEnScene("Spielberg", "Steven", new GregorianCalendar(3, 12, 1969)),
				new MetteurEnScene("Coen", "Ettan", new GregorianCalendar(3, 12, 1969)),
				new MetteurEnScene("Coppolla", "Francis Ford", new GregorianCalendar(3, 12, 1969))
		};

		
		
		Film bigLebow = new Film("The Big Lebowski", 1996);
		Film eT = new Film("E.T.", 1982);
		
		eT.ajouterActeur(mesActeurs[0]);
		eT.ajouterActeur(mesActeurs[2]);
		eT.setMetteurEnScene(mesDirecteurs[0]);		
		
		bigLebow.ajouterActeur(mesActeurs[1]);
		bigLebow.ajouterActeur(mesActeurs[2]);
		bigLebow.setMetteurEnScene(mesDirecteurs[1]);
		
		ListePersonnes mesPersonnes = ListePersonnes.getInstance();
		
		
		
		for( Acteur act : mesActeurs){
			mesPersonnes.ajouterPersonne(act);
		}
		
		for (MetteurEnScene sceneur : mesDirecteurs){
			mesPersonnes.ajouterPersonne(sceneur);
		}
		
		Iterator<Personne> acteurIt = mesPersonnes.listePersonne();
		while( acteurIt.hasNext()){
			Personne personne = acteurIt.next();
			System.out.println(personne);
			
			Iterator<Film> filmsIt;
			if (personne instanceof Acteur) {
				System.out.println("a joué dans les films suivant:");
				filmsIt = ((Acteur)personne).films();
			}
			else {
				if (personne instanceof MetteurEnScene) {
					System.out.println("a dirrigé les films suivant:");
					filmsIt = ((MetteurEnScene)personne).films();
				}
				else {
					System.out.println("Est inconnu et n'a rien à faire ici !!! ");
					continue;
				}
			}
			while (filmsIt.hasNext()){
				Film film = filmsIt.next();
				System.out.println(film);
			}
			
		}
	}
	
	

}
