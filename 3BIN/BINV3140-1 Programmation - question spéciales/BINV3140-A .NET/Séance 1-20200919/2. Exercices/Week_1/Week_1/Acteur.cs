using System;
using System.Collections.Generic;

namespace be.ipl.film_database.domaine
{
    class Acteur : Personne
    {

		private readonly int _tailleEnCm;
		private List<Film> _films;

		public int TailleEnCm
		{
			get { return _tailleEnCm; }
		}


		public Acteur(String nom, String prenom, DateTime dateDeNaissance, int tailleEnCm) : base (nom, prenom, dateDeNaissance)
		{
			this._tailleEnCm = tailleEnCm;
			this._films = new List<Film>();
		}

		public override String ToString()
		{
			return "Acteur [nom = " + Nom + " prénom = " + Prenom + " tailleEnCm=" + _tailleEnCm + ", toString()="
					 + "]";
		}

		/**
		 * 
		 * @return La liste des films dans lequel l'acteur à joué.
		 */
		public IEnumerator<Film> Films()
		{
			return _films.GetEnumerator();
		}

		/**
		 * Ajoute le film à la liste des film dans lequel l'acteur a joué
		 * @param film
		 * @return false si le film est déjà présent ou null
		 */
		public bool AjouterFilm(Film film)
		{
			if ((film == null) || _films.Contains(film))
				return false;

			if (!film.ContientActeur(this))
				film.AjouterActeur(this);

			_films.Add(film);

			return true;
		}

		/**
		 * 
		 * @param film
		 
		 */
		public bool ContientFilm(Film film)
		{
			return _films.Contains(film);
		}

		/**
		 * @return le nom capitalisé
		 */
		public override String Nom
		{
			get { return base.Nom.ToUpper(); }
		}
	}
}
