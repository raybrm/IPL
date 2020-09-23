package be.ipl.film_database.domaine;

import java.util.ArrayList;
import java.util.List;

public class Film {

	public MetteurEnScene getMetteurEnScene() {
		return metteurEnScene;
	}
	public void setMetteurEnScene(MetteurEnScene metteurEnScene) {
		if (metteurEnScene == null)
			return;
		this.metteurEnScene = metteurEnScene;
		metteurEnScene.ajouterFilm(this);
	}

	private String titre;
	private int annéeSortie;
	private List<Acteur> acteurs;
	private MetteurEnScene metteurEnScene;
	public String getTitre() {
		return titre;
	}
	public void setTitre(String titre) {
		this.titre = titre;
	}
	public int getAnnéeSortie() {
		return annéeSortie;
	}
	public void setAnnéeSortie(int annéeSortie) {
		this.annéeSortie = annéeSortie;
	}
	
	public Film(String titre, int annéeSortie) {
		acteurs = new ArrayList<Acteur>();
		this.titre = titre;
		this.annéeSortie = annéeSortie;
	}

	/**
	 * Ajoute l'acteur au cast du film
	 * @param acteur
	 * @return false si l'acteur est déjà dans le cast du film true sinon
	 */
	public boolean ajouterActeur(Acteur acteur){
		if (acteurs.contains(acteur))
			return false;
		
		
		acteurs.add(acteur);
		if (!acteur.contientFilm(this))
			acteur.ajouterFilm(this);
		
		return true;
	}
	
	/**
	 * 
	 * @param acteur
	 * @return true si l'acteur dait partie du cast du film
	 */
	public boolean contientActeur(Acteur acteur){
		return acteurs.contains(acteur);
	}
	@Override
	public String toString() {
		return "Film [titre=" + titre + ", annéeSortie=" + annéeSortie + "]";
	}
	
	
	
}
