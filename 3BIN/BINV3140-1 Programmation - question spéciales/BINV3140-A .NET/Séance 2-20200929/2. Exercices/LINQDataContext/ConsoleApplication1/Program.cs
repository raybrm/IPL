using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using LINQDataContext;

namespace ConsoleApplication1
{
    class Program
    {
        static void Main(string[] args)
        {
            DataContext dc = new DataContext();


            /*
             * Exercice 2.1
               Ecrire une requête pour présenter, pour chaque étudiant, le nom de l’étudiant, la date de naissance, 
               le login et le résultat pour l’année de l’étudiant.
            */

            /*IEnumerable<Student> query = from Student s in dc.Students
                                         select s;

            foreach (Student student in query)
            {
                Console.WriteLine(student.Login);
            }
            */

            // Type Anonyme
            var query = from Student s in dc.Students
                        select new { Name = s.Last_Name, DateDeNaissance = s.BirthDate, Identifiant = s.Login };

            foreach (var student in query)
            {
                Console.WriteLine(student.Name);
            }


            /* Exercice 2.2*/
            Console.WriteLine("-------------");

            var query2 = from Student s in dc.Students
                        select new { Name = s.Last_Name, Prenom = s.First_Name, DateDeNaissance = s.BirthDate, Identifiant = s.Student_ID };

            foreach (var student in query2)
            {
                Console.WriteLine(" {0} {1} : {2}, {3}", student.Name, student.Prenom, student.Identifiant, student.DateDeNaissance);
            }

            /* Exercice 2.3*/
            Console.WriteLine("-------------");
            IEnumerable<Student> query3 = from Student s in dc.Students
                                          select s;

            /* Exercice 3.1*/
            Console.WriteLine("-------------");
            var query31 = from Student s in dc.Students
                          where s.BirthDate.Year <= 1955
                          select new { Name = s.Last_Name, Resultat = s.Year_Result};

            foreach (var student in query31)
            {
                var status = student.Resultat >= 12 ? "OK": "KO";
                Console.WriteLine(" {0} {1} {2}", student.Name, student.Resultat, status);
            }


            /* Exercice 3.2*/
            Console.WriteLine("-------------");
            var query32 = from Student s in dc.Students
                          where s.BirthDate.Year >= 1955 && s.BirthDate.Year <= 1965
                          select new { Name = s.Last_Name, Resultat = s.Year_Result };

            foreach (var student in query32)
            {
                string categorie;
                if (student.Resultat == 10)
                {
                    categorie = "neutre";
                } else if (student.Resultat > 10)
                {
                    categorie = "supérieur";
                } else
                {
                    categorie = "inférieur";
                }
                Console.WriteLine(" {0} {1} {2}", student.Name, student.Resultat, categorie);
            }


            /* Exercice 3.2*/
            Console.WriteLine("-------------");
            var query33 = from Student s in dc.Students
                          where s.BirthDate.Year >= 1955 && s.BirthDate.Year <= 1965
                          select new { Name = s.Last_Name, Resultat = s.Year_Result };



            Console.ReadLine();
        }
    }
}
