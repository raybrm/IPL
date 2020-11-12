package ex2;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class ControleDAcces {
	
	
	private Map<Badge, Employe> allBadges; // Les Badges par employ�; sert a recuperer le badge de l'employ�;
											// deux m�me badges ne peuvent pas �tre dans la map; la map ne peut pas contenir 2 cl�s les m�mes
	private Set<Employe> presents;	// evite les doublons; un emplye peut pas �tre pr�sent deux fois
	
	public ControleDAcces(){
		allBadges = new HashMap<>();
		presents = new HashSet<>();
	}
	
	// associe le badge � un employ�
	public void donnerBadge (Badge b, Employe e){
		allBadges.put(b, e); // O(1)
	}
	
	// met � jour les employ�s pr�sents dans le batiment
	public void entrerBatiment (Badge b){
		Employe empl = allBadges.get(b);
		if (empl != null)
			presents.add(empl);
	}

	// met � jour les employ�s pr�sents dans le batiment
	public void sortirBatiment (Badge b){
		Employe empl = allBadges.get(b);
		if (empl != null)
			presents.remove(empl);
	}
	
	// renvoie vrai si l'employ� est dans le batiment, faux sinon
	public boolean estDansBatiment (Employe e){
		return presents.contains(e); // O(1)
	}

}
