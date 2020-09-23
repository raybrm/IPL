using System;
using System.Collections.Generic;
using be.ipl.film_database.domaine;

namespace ConsoleApplication1
{
    class Program
    {
        static void Main(string[] args)
        {
            Acteur[] mesActeurs = new Acteur[]{
                new Acteur( "Assange", "Julian", new DateTime(1969,3,12), 187),
                new Acteur( "Paul", "Newmann", new DateTime(1969,3,12), 187),
                new Acteur( "Becker", "Norma Jean", new DateTime(1969,3,12), 187)
        };

            MetteurEnScene[] mesDirecteurs = {
                new MetteurEnScene("Spielberg", "Steven", new DateTime(1969,3,12)),
                new MetteurEnScene("Coen", "Ettan", new DateTime(1969,3,12)),
                new MetteurEnScene("Coppolla", "Francis Ford", new DateTime(1969,3,12))
        };



            Film bigLebow = new Film("The Big Lebowski", 1996);
            Film eT = new Film("E.T.", 1982);

            eT.AjouterActeur(mesActeurs[0]);
            eT.AjouterActeur(mesActeurs[2]);
            eT.SetMetteurEnScene(mesDirecteurs[0]);

            bigLebow.AjouterActeur(mesActeurs[1]);
            bigLebow.AjouterActeur(mesActeurs[2]);
            bigLebow.SetMetteurEnScene(mesDirecteurs[1]);

            ListePersonnes mesPersonnes = ListePersonnes.GetInstance();

            foreach (Acteur act in mesActeurs)
            {
                mesPersonnes.AjouterPersonne(act);
            }

            foreach (MetteurEnScene sceneur in mesDirecteurs)
            {
                mesPersonnes.AjouterPersonne(sceneur);
            }

            IEnumerator<Personne> acteurIt = mesPersonnes.ListePersonne();
            while (acteurIt.MoveNext())
            {
                Personne personne = acteurIt.Current;
                Console.WriteLine(personne);

                IEnumerator<Film> filmsIt;
                if (personne is Acteur)
                {
                    Console.WriteLine("a joué dans les films suivant:");
                    filmsIt = ((Acteur)personne).FilmsIeEnumerator();
                }
                else
                {
                    if (personne is MetteurEnScene)
                    {
                        Console.WriteLine("a dirigé les films suivant:");
                        filmsIt = ((MetteurEnScene)personne).Films();
                    }
                    else
                    {
                        Console.WriteLine("Est inconnu et n'a rien à faire ici !!! ");
                        continue;
                    }
                }
                while (filmsIt.MoveNext())
                {
                    Film film = filmsIt.Current;
                    Console.WriteLine(film);
                }

            }

            String i = Console.ReadLine();

        }


    }
}
