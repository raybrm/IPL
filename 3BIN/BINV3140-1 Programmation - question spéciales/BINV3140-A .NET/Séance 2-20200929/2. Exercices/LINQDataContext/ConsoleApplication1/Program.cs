using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using LINQDataContext;

namespace ConsoleApplication1
{
    class Program
    {   
        // Requete LINQ sur des objets
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

            /* Exercice 4.1 */
            Console.WriteLine("------ EXERCICE 4.1 -------");
            double moyenne = dc.Students.Average(s => s.Year_Result);
            Console.WriteLine("Moyenne = " + moyenne);

            /* Exercice 4.2 */
            Console.WriteLine("------ EXERCICE 4.2 -------");
            double max = dc.Students.Max(s => s.Year_Result); 
            Console.WriteLine("Max = " + max);

            /* Exercice 4.3 */
            Console.WriteLine("------ EXERCICE 4.3 -------");
            double somme = dc.Students.Sum(s => s.Year_Result);
            Console.WriteLine("Somme = " + somme);

            /* Exercice 4.4 */
            Console.WriteLine("------ EXERCICE 4.4 -------");
            double min = dc.Students.Min(s => s.Year_Result);
            Console.WriteLine("Max = " + min);

            /* Exercice 4.5 */
            Console.WriteLine("------ EXERCICE 4.5 -------");
            int nbLigne = dc.Students.Count();
            Console.WriteLine("Nombre de ligne = " + nbLigne);

            /* Exercice 5.1 */
            Console.WriteLine("------ EXERCICE 5.1 -------");
            IEnumerable<IGrouping<int, Student>> query51 = from Student s in dc.Students
                                                           group s by s.Section_ID;
            
            foreach (IGrouping<int, Student> section in query51)
            {
                Console.WriteLine("Le max de la section {0} est {1}", section.Key, section.Max(s => s.Year_Result));
            }

            /* Exercice 5.2 */
            Console.WriteLine("------ EXERCICE 5.2 -------");
            IEnumerable<IGrouping<int, Student>> query52 = from Student s in dc.Students
                                                           where s.Section_ID.ToString().StartsWith("10")
                                                           group s by s.Section_ID;

            foreach (IGrouping<int, Student> section in query52)
            {
                Console.WriteLine("La moyenn de la section {0} est {1}", section.Key, section.Average(s => s.Year_Result));
            }

            /* Exercice 5.3 */
            Console.WriteLine("------ EXERCICE 5.3 -------");
            IEnumerable<IGrouping<int, Student>> query53 = from Student s in dc.Students
                                                           where s.BirthDate.Year >= 1970 && s.BirthDate.Year <= 1985
                                                           group s by s.BirthDate.Month;

            foreach (IGrouping<int, Student> section in query53)
            {
                Console.WriteLine("La moyenne des étudiants du mois de {0} est {1}", section.Key, section.Average(s => s.Year_Result));
            }


            /* Exercice 5.4 */
            Console.WriteLine("------ EXERCICE 5.4 -------");
            IEnumerable<IGrouping<int, Student>> query54 = from Student s in dc.Students
                                                           group s by s.Section_ID;

            foreach (IGrouping<int, Student> section in query54)
            {
                if (section.Count() > 3)
                {
                    Console.WriteLine("La moyenne de la section {0} est {1}", section.Key, section.Average(s => s.Year_Result));
                }

            }

            /* Exercice 5.5 */
            Console.WriteLine("------ EXERCICE 5.5 -------");
            var query55 = from Course c in dc.Courses
                          join prof in dc.Professors on c.Professor_ID equals prof.Professor_ID
                          join section in dc.Sections on prof.Section_ID equals section.Section_ID
                          select new
                          {
                              Course_name = c.Course_Name,
                              Section_name = section.Section_Name,
                              Professor_name = prof.Professor_Name
                          };

            foreach (var jointure in query55)
            {
                Console.WriteLine("{0} {1} {2}", jointure.Course_name, jointure.Section_name, jointure.Professor_name);
            }

            /* Exercice 5.6 */
            Console.WriteLine("------ EXERCICE 5.6 -------");
            var query56 = from Section s in dc.Sections
                          join stud in dc.Students on s.Delegate_ID equals stud.Student_ID
                          orderby s.Section_ID descending
                          select new
                          {
                              Section_id = s.Section_ID,
                              Section_name = s.Section_Name,
                              Last_name = stud.Last_Name
                          };

            foreach (var jointure in query56)
            {
                Console.WriteLine("{0} {1} {2}", jointure.Section_id, jointure.Section_name, jointure.Last_name);
            }

            /* Exercice 5.7 */
            // Le groupJoin permet d'avoir plusieurs élément de la table de gauche raccorder à des éléments de la table de droite 
            // Les éléments qui n'ont pas de correspondance sont aussi mis dans le résultat
            // Ici une section peut avoir plusieurs prof, si on ne fait pas le groupjoin, il y aura pour chaque section un seul prof au max
            Console.WriteLine("------ EXERCICE 5.7 -------");
            var query57 = from Section s in dc.Sections
                          join prof in dc.Professors on s.Section_ID equals prof.Section_ID into sectProfs
                          select new
                          {
                              Section_id = s.Section_ID,
                              Section_name = s.Section_Name,
                              sectProfs
                          };

            foreach (var jointure in query57)
            {
                Console.WriteLine("{0} {1} : ", jointure.Section_id, jointure.Section_name); 
                if (jointure.sectProfs.Count() > 0)
                {
                    foreach (Professor prof in jointure.sectProfs)
                    {
                        Console.WriteLine("{0}", prof.Professor_Name);
                    }
                } else
                {
                    Console.WriteLine("Aucun");
                }
            }

            Console.ReadLine();
        }
    }
}
