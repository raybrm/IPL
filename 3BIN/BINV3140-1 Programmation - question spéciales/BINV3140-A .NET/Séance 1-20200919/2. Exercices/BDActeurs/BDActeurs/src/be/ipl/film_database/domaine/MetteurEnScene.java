package be.ipl.film_database.domaine;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Iterator;
import java.util.List;

public class MetteurEnScene extends Personne implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 5952964360274024205L;
	private List<Film> filmsDirig�s;
	
	public MetteurEnScene(String nom, String prenom, Calendar dateDeNaissance) {
		super(nom, prenom, dateDeNaissance);
		filmsDirig�s = new ArrayList<Film>();
	}

	public boolean ajouterFilm(Film film){
		
		if (filmsDirig�s.contains(film))
			return false;
		
		if (film.getMetteurEnScene() == null)
			film.setMetteurEnScene(this);
		
		filmsDirig�s.add(film);
		
		
		
		return true;
		
	}
	
	public Iterator<Film> films(){
		return filmsDirig�s.iterator();
	}
	
	
}
