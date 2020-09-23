using System;
using System.Collections.Generic;

namespace be.ipl.film_database.domaine
{
    class Film
    {
        public MetteurEnScene GetMetteurEnScene()
        {
            return _metteurEnScene;
        }
        public void SetMetteurEnScene(MetteurEnScene metteurEnScene)
        {
            if (metteurEnScene == null)
                return;
            _metteurEnScene = metteurEnScene;
            metteurEnScene.AjouterFilm(this);
        }

        private String _titre;
        private int _annéeSortie;
        private readonly List<Acteur> _acteurs;
        private MetteurEnScene _metteurEnScene;
        public String GetTitre()
        {
            return _titre;
        }
        public void SetTitre(String titre)
        {
            _titre = titre;
        }
        public int GetAnnéeSortie()
        {
            return _annéeSortie;
        }
        public void SetAnnéeSortie(int annéeSortie)
        {
            _annéeSortie = annéeSortie;
        }

        public Film(String titre, int annéeSortie)
        {
            _acteurs = new List<Acteur>();
            _titre = titre;
            _annéeSortie = annéeSortie;
        }


        /// <summary>Ajoute l'acteur au cast du film</summary>
        /// <param> acteur</param>
        /// <return> </return>false si l'acteur est déjà dans le cast du film true sinon</return>
        public bool AjouterActeur(Acteur acteur)
        {
            if (_acteurs.Contains(acteur))
                return false;


            _acteurs.Add(acteur);
            if (!acteur.ContientFilm(this))
                acteur.AjouterFilm(this);

            return true;
        }

        /// <param> acteur</param>
        /// <return> true si l'acteur dait partie du cast du film</return>
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
