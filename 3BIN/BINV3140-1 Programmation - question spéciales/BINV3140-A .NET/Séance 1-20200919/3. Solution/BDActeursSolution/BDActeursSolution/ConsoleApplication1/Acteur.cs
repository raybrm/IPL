using System;
using System.Collections.Generic;

namespace be.ipl.film_database.domaine
{
    [Serializable]
    class Acteur : Personne
    {
        private readonly int _tailleEnCm;
        private readonly List<Film> _films;

        public int GetTailleEnCm()
        {
            return _tailleEnCm;
        }



        public Acteur(String nom, String prenom, DateTime dateDeNaissance, int tailleEnCm) : base(nom, prenom, dateDeNaissance)
        {
            _tailleEnCm = tailleEnCm;
            _films = new List<Film>();
        }



        public override String ToString()
        {
            return "Acteur [nom = " + GetNom() + " prénom = " + GetPrenom() + " tailleEnCm=" + _tailleEnCm + ", toString()="
                     + "]";
        }

        ///
        ///
        /// <return> La liste des films dans lequel l'acteur à joué.</return>
        public IEnumerator<Film> FilmsIeEnumerator()
        {
            return _films.GetEnumerator();
        }

        /// <summary> Ajoute le film à la liste des film dans lequel l'acteur a joué </summary>
        /// <param> film </param>
        /// <return> false si le film est déjà présent ou null </return>
        public bool AjouterFilm(Film film)
        {
            if ((film == null) || _films.Contains(film))
                return false;

            if (!film.ContientActeur(this))
                film.AjouterActeur(this);

            _films.Add(film);



            return true;
        }

         /// <param> film</param>
         
        public bool ContientFilm(Film film)
        {
            return _films.Contains(film);
        }

        /// <return> le nom capitalisé </return>
        public override String GetNom()
        {
            return base.GetNom().ToUpper();
        }
    }
}
