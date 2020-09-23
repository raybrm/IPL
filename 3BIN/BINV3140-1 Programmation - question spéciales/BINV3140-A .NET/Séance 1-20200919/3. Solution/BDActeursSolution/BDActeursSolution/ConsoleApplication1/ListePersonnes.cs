using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace be.ipl.film_database.domaine
{
    class ListePersonnes
    {
        private static ListePersonnes _instance;
        private IDictionary<String, Personne> lesPersonnes;


         /// Constructeur privé car singleton.         
        private ListePersonnes()
        {
            lesPersonnes = new Dictionary<String, Personne>();
        }

        /// ListePersonnes est un singleton.
        /// <return> La seule instance de la classe </return>
        public static ListePersonnes GetInstance()
        {

            if (_instance == null)
                _instance = new ListePersonnes();

            return _instance;
        }

        
        /// <summary> Ajoute une personne à la liste en utilisant sn nom comme clef </summary>
        /// <param>personne</param> 
        public void AjouterPersonne(Personne personne)
        {
            if (personne == null)
                throw new ArgumentNullException();
            lesPersonnes.Add(personne.GetNom(), personne);
        }

        public IEnumerator<Personne> ListePersonne()
        {
            return lesPersonnes.Values.GetEnumerator();
        }

    }
}
