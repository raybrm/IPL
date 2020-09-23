using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace be.ipl.film_database.domaine
{
    class Film
    {

		private String _titre;
		private int _annéeSortie;
		private List<Acteur> _acteurs;
		private MetteurEnScene _metteurEnScene;

		public Film(String titre, int annéeSortie)
		{
			_acteurs = new List<Acteur>();
			this._titre = titre;
			this._annéeSortie = annéeSortie;
		}

		public String Titre
		{
			get { return _titre; }
			set { _titre = value;  }
		}
		
		public int AnnéeSortie
		{
			get { return _annéeSortie; }
			set { _annéeSortie = value;  }
		}

		public MetteurEnScene MetteurEnScene
		{
			get { return _metteurEnScene; }
			set 
			{ 
				if (value == null)
					return;
				_metteurEnScene = value;
				value.AjouterFilm(this);	
			}
		}

		/**
		 * Ajoute l'acteur au cast du film
		 * @param acteur
		 * @return false si l'acteur est déjà dans le cast du film true sinon
		 */
		public bool AjouterActeur(Acteur acteur)
		{
			if (_acteurs.Contains(acteur))
				return false;

			_acteurs.Add(acteur);
			if (!acteur.ContientFilm(this))
				acteur.AjouterFilm(this);

			return true;
		}

		/**
		 * 
		 * @param acteur
		 * @return true si l'acteur fait partie du cast du film
		 */
		public bool ContientActeur(Acteur acteur)
		{
			return _acteurs.Contains(acteur);
		}

		public override String ToString()
		{
			return "Film [titre=" + _titre + ", annéeSortie=" + _annéeSortie + "]";
		}
	}
}
