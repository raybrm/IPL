using System;

namespace be.ipl.film_database.domaine
{
    [Serializable]
    class Personne
    {

        private readonly String _nom;
        private readonly String _prenom;
        private readonly DateTime _dateDeNaissance;

        public virtual String GetNom()
        {
            return _nom;
        }

        public String GetPrenom()
        {
            return _prenom;
        }

        public DateTime GetDateDeNaissance()
        {
            return _dateDeNaissance;
        }

        public Personne(String nom, String prenom, DateTime dateDeNaissance)
        {
            _nom = nom;
            _prenom = prenom;
            _dateDeNaissance = dateDeNaissance;
        }


        public override String ToString()
        {
            return "Personne [nom=" + _nom + ", prenom=" + _prenom
                    + ", dateDeNaissance=" + _dateDeNaissance + "]";
        }

    }
}
