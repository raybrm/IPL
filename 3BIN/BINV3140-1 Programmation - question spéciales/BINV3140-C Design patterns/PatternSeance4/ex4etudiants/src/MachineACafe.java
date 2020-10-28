public class MachineACafe {
	public enum State {
		INACTIF {
			@Override
			public void selectionnerBoisson(MachineACafe mc, ToucheBoisson toucheBoisson) {
				mc.afficherPasAssez(toucheBoisson);
				return;	
			}	
			
			@Override
			public void rendreMonnaie(MachineACafe mc) {}

		}, COLLECTE {

			@Override
			public void selectionnerBoisson(MachineACafe mc, ToucheBoisson toucheBoisson) {
				
				if (toucheBoisson.getPrix() > mc.montantEnCours) {
					mc.boisson = toucheBoisson;
					mc.afficherPasAssez(mc.boisson);
					mc.boisson = toucheBoisson;
					mc.setState(PASASSEZ);
					return;
				}
				mc.montantEnCours -= toucheBoisson.getPrix();
				mc.afficherBoisson(toucheBoisson);
				mc.afficherMontant();
				if (mc.montantEnCours == 0)
					mc.setState(INACTIF);
				else
					mc.setState(COLLECTE);
				
			}
			
		}, PASASSEZ {

			@Override
			public void selectionnerBoisson(MachineACafe mc, ToucheBoisson toucheBoisson) {
				throw new IllegalStateException();
			}
			
			@Override
			public void entrerMonnaie(MachineACafe mc, Piece piece) {
				if (mc.boisson.getPrix() > mc.montantEnCours) {
					mc.afficherPasAssez(mc.boisson);
				} else {
					mc.montantEnCours -= mc.boisson.getPrix();
					mc.afficherBoisson(mc.boisson);
					mc.boisson = null;
					mc.afficherMontant();
					if (mc.montantEnCours == 0)
						mc.setState(INACTIF);
					else
						mc.setState(COLLECTE);
						
				}
			}
			
		};
		
		// Methode générale : comme si c'était une interface
		public abstract void selectionnerBoisson(MachineACafe mc, ToucheBoisson toucheBoisson);
		public void entrerMonnaie(MachineACafe mc, Piece piece) {
			// Comportement par défaut
			mc.setState(COLLECTE);
			
		}
		public void rendreMonnaie(MachineACafe mc) {
			mc.afficherRetour();
			mc.montantEnCours = 0;
			mc.boisson = null;
			mc.setState(INACTIF);
		}
	}
	
	
	public State etatCourant = State.INACTIF;
	private int montantEnCours = 0;
	private ToucheBoisson boisson = null;
	
	public void afficherMontant() {
		System.out.println(montantEnCours + " cents disponibles");
	}
	
	public void afficherRetour() {
		System.out.println(montantEnCours + " cents rendus");
	}
	
	public void afficherPasAssez(ToucheBoisson toucheBoisson) {
		System.out.println("Vous n'avez pas introduit un montant suffisant pour un " + toucheBoisson);
		System.out.println("Il manque encore " + (toucheBoisson.getPrix() - montantEnCours) + " cents");
	}

	public void afficherBoisson(ToucheBoisson toucheBoisson) {
		System.out.println("Voici un " + toucheBoisson);
		
	}

	public void entrerMonnaie(Piece piece) {
		// On peut mettre de la redondance de code ici quand les 3 états on chacune un comportement différente 
		montantEnCours += piece.getValeur();
		afficherMontant();
		etatCourant.entrerMonnaie(this, piece);
	}
	
	public void selectionnerBoisson(ToucheBoisson toucheBoisson) {
		etatCourant.selectionnerBoisson(this, toucheBoisson);
	}
	
	public void rendreMonnaie() {
		etatCourant.rendreMonnaie(this);
	}
	
	public void setState(State state) {
		this.etatCourant = state;
	}
}
