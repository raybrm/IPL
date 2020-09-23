package be.ipl.film_database.domaine;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Iterator;
import java.util.List;

public class Acteur extends Personne implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private final int tailleEnCm;
	private List<Film> films;

	public int getTailleEnCm() {
		return tailleEnCm;
	}

	
	
	public Acteur(String nom, String prenom, Calendar dateDeNaissance, int tailleEnCm) {
		super(nom, prenom, dateDeNaissance);
		this.tailleEnCm = tailleEnCm;
		films = new ArrayList<Film>();
	}



	@Override
	public String toString() {
		return "Acteur [nom = " + getNom() + " pr�nom = " + getPrenom() + " tailleEnCm=" + tailleEnCm + ", toString()="
				 + "]";
	}
	
	/**
	 * 
	 * @return La liste des films dans lequel l'acteur � jou�.
	 */
	public Iterator<Film> films(){
		return films.iterator();
	}
	
	/**
	 * Ajoute le film � la liste des film dans lequel l'acteur a jou�
	 * @param film
	 * @return false si le film est d�j� pr�sent ou null
	 */
	public boolean ajouterFilm(Film film){
		if ((film == null) || films.contains(film))
			return false;
		
		if (!film.contientActeur(this))
			film.ajouterActeur(this);
		
		films.add(film);
		
					
		
		return true;
	}
	
	/**
	 * 
	 * @param film
	 
	 */
	public boolean contientFilm(Film film){
		return films.contains(film);
	}
	
	/**
	 * @return le nom capitalis�
	 */
	@Override
	public String getNom(){
		return super.getNom().toUpperCase();
	}
}
