package be.ipl.film_database.domaine;

import java.io.Serializable;
import java.util.Calendar;

public class Personne implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private final String nom;
	private final String prenom;
	private final Calendar dateDeNaissance;
	
	public String getNom() {
		return nom;
	}
	
	public String getPrenom() {
		return prenom;
	}
	
	public Calendar getDateDeNaissance() {
		return dateDeNaissance;
	}
	
	public Personne(String nom, String prenom, Calendar dateDeNaissance) {
		this.nom = nom;
		this.prenom = prenom;
		this.dateDeNaissance = dateDeNaissance;
	}

	@Override
	public String toString() {
		return "Personne [nom=" + nom + ", prenom=" + prenom
				+ ", dateDeNaissance=" + dateDeNaissance + "]";
	}
	
	
}
