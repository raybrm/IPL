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

            // var => type anonyme : utilse quand on ne prend pas tous les attributs d'un objet
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


            /* Exercice 3.3*/
            Console.WriteLine("------ EXERCICE 3.3 -------");
            var query33 = from Student s in dc.Students
                          where (s.Last_Name.Last() == 'r')
                          select new { Name = s.Last_Name, StudentId = s.Student_ID };


            foreach (var student in query33)
            {
                Console.WriteLine(student);
            }


            /* Exercice 3.4 */
            Console.WriteLine("------ EXERCICE 3.4 -------");
            var query34 = from Student s in dc.Students
                          where (s.Year_Result <= 3)
                          orderby s.Year_Result descending
                          select new { 
                              Name = s.Last_Name, 
                              Resultat = s.Year_Result,
                              catégorie = (s.Year_Result < 10) ? "inférieure" : (s.Year_Result == 10) ? "neutre" : "supérieure"
                          };

            foreach (var student in query34)
            {
                Console.WriteLine(student);
            }

            /* Exercice 3.5 */
            Console.WriteLine("------ EXERCICE 3.5 -------");
            var query35 = from Student s in dc.Students
                          where s.Section_ID == 1110
                          orderby s.Last_Name ascending
                          select new
                          {
                              Fullname = s.Last_Name + " " + s.First_Name,
                              Resultat = s.Year_Result,
                              catégorie = (s.Year_Result < 10) ? "inférieure" : (s.Year_Result == 10) ? "neutre" : "supérieure"
                          };

            foreach (var student in query35)
            {
                Console.WriteLine(student);
            }

            /* Exercice 3.6 */
            Console.WriteLine("------ EXERCICE 3.6 -------");
            var query36 = from Student s in dc.Students
                          where s.Section_ID == 1010 || s.Section_ID == 1020
                          && !(s.Year_Result >= 12 && s.Year_Result <= 18)
                          orderby s.Year_Result ascending
                          select new
                          {
                              Fullname = s.Last_Name + " " + s.First_Name,
                              s.Year_Result,
                              s.Section_ID,
                              catégorie = (s.Year_Result < 10) ? "inférieure" : (s.Year_Result == 10) ? "neutre" : "supérieure"
                          };

            foreach (var student in query36)
            {
                Console.WriteLine(student);
            }

            /* Exercice 3.7 */
            Console.WriteLine("------ EXERCICE 3.7 -------");
            var query37 = dc.Students.Where(x => x.Section_ID.ToString().StartsWith("13") && x.Year_Result * 5 <= 60)
                            .OrderByDescending(s => s.Year_Result)
                            .Select(s => new
                            {
                                FullName = s.Last_Name + " " + s.First_Name,
                                result_100 = s.Year_Result * 5,
                                s.Section_ID,
                                catégorie = (s.Year_Result < 10) ? "inférieure" : (s.Year_Result == 10) ? "neutre" : "supérieure"

                            });

            foreach (var student in query37)
            {
                Console.WriteLine(student);
            }


            Console.ReadLine();
        }
    }
}
