package be.ipl.film_database.domaine;

import java.security.InvalidParameterException;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

public class ListePersonnes {

	private static ListePersonnes instance;
	private Map<String, Personne> lesPersonnes;
	
	/**
	 * Constructeur privé car singleton.
	 */
	private ListePersonnes(){
		lesPersonnes = new HashMap<String, Personne>();
	}
	
	/**
	 * ListePersnnes est un singleton.
	 * @return La seule intancede la classe
	 */
	public static ListePersonnes getInstance(){
		
		if (instance == null)
			instance = new ListePersonnes();
		
		return instance;
	}
	
	/**
	 * Ajoute une personne à la liste en utilisant sn nom comme clef
	 * @param personne
	 */
	public void ajouterPersonne(Personne personne){
		if (personne == null)
			throw new InvalidParameterException();
		lesPersonnes.put(personne.getNom(), personne);
	}
	
	public Iterator<Personne> listePersonne(){
		return lesPersonnes.values().iterator();
	}
	
}
