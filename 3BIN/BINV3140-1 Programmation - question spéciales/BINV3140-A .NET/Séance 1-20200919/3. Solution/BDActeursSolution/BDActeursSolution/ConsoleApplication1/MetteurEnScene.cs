using System;
using System.Collections.Generic;

namespace be.ipl.film_database.domaine
{
    [Serializable]
    class MetteurEnScene : Personne
    {

        private IList<Film> _filmsDirigés;

        public MetteurEnScene(String nom, String prenom, DateTime dateDeNaissance) : base(nom, prenom, dateDeNaissance)
        {
            _filmsDirigés = new List<Film>();
        }

        public bool AjouterFilm(Film film)
        {

            if (_filmsDirigés.Contains(film))
                return false;

            if (film.GetMetteurEnScene() == null)
                film.SetMetteurEnScene(this);

            _filmsDirigés.Add(film);



            return true;

        }

        public IEnumerator<Film> Films()
        {
            return _filmsDirigés.GetEnumerator();
        }


    }
}
