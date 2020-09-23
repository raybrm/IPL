using System;


namespace be.ipl.film_database.domaine
{
	[Serializable]
	public class Personne
	{

		private readonly String _nom;
		private readonly String _prenom;
		private readonly DateTime _dateDeNaissance;
	
		public virtual String Nom
		{
			get { return _nom; }
		}

		public String Prenom
		{
			get { return _prenom; }
		}

		public DateTime DateDeNaissance
		{
			get { return _dateDeNaissance; }
		}

		public Personne(String nom, String prenom, DateTime dateDeNaissance)
		{
			this._nom = nom;
			this._prenom = prenom;
			this._dateDeNaissance = dateDeNaissance;
		}

	
		public override String ToString()
		{
			return "Personne [nom=" + _nom + ", prenom=" + _prenom
					+ ", dateDeNaissance=" + _dateDeNaissance + "]";
		}

	}
}
