using System;
using System.Collections.Generic;

namespace be.ipl.film_database.domaine
{
    class ListePersonnes
    {
		private static ListePersonnes _instance;
		private IDictionary<String, Personne> _lesPersonnes;

		/**
		 * Constructeur privé car singleton.
		 */
		private ListePersonnes()
		{
			_lesPersonnes = new Dictionary<String, Personne>();
		}

		/**
		 * ListePersnnes est un singleton.
		 * @return La seule intancede la classe
		 */
		public static ListePersonnes GetInstance()
		{

			if (_instance == null)
				_instance = new ListePersonnes();

			return _instance;
		}

		/**
		 * Ajoute une personne à la liste en utilisant sn nom comme clef
		 * @param personne
		 */
		public void AjouterPersonne(Personne personne)
		{
			if (personne == null)
				throw new ArgumentNullException();
			_lesPersonnes.Add(personne.Nom, personne);
		}

		public IEnumerator<Personne> ListePersonne()
		{
			return _lesPersonnes.Values.GetEnumerator();
		}
	}
}
