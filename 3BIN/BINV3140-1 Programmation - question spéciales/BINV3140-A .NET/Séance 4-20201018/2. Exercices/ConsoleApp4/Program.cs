using System;
using System.Collections.Generic;
using System.Data.Entity.Core;
using System.Data.Entity.Core.Objects;
using System.Linq;
using System.Linq.Expressions;
using System.Runtime.Remoting.Contexts;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp4
{
    class Program
    {
        static void Main(string[] args)
        {
            NorthwindEntities northwindEntities = new NorthwindEntities();

            /*
            Console.WriteLine("Exercice B.1");
            Console.WriteLine("Entre une ville");
            string ville = Console.ReadLine();

            IQueryable<Customer> query = from Customer c in northwindEntities.Customers
                                         where (c.City == ville)
                                         select c;

            foreach (Customer cust in query)
            {
                Console.WriteLine(" {0} - {1}", cust.ContactName, cust.City);
            }


            Console.WriteLine("Exercice B.2"); // Lazy Loading par défaut 
            Console.WriteLine("Entrez un pays");
            string pays = Console.ReadLine();

            IQueryable<Product> query2 = from Product p in northwindEntities.Products
                                         select p;

            foreach (Product product in query2)
            {
                if (product.Supplier.Country == pays) // Lazy loading à ce moment
                {
                    Console.WriteLine(" {0} - {1}", product.ProductName, product.Supplier.Country);
                }
            }

            Console.WriteLine("Exercice B.3"); // Eager loading
            Console.WriteLine("Entrez un pays");
            pays = Console.ReadLine();

            IQueryable<Supplier> query3 = from Supplier supplier in northwindEntities.Suppliers
                                          .Include("Products")
                                          where supplier.Country == pays
                                          select supplier;

            foreach (Supplier supplier in query3)
            {
                foreach (Product product in supplier.Products) // boucle sur les produits d'un fournisseurs
                {
                    Console.WriteLine(" {0} ", product.ProductName);
                }
            }

            Console.WriteLine("Exercice B.4");
            Console.WriteLine("Entrez un client");
            string client = Console.ReadLine();

            var query4 = from Order order in northwindEntities.Orders
                         where (order.Customer.CustomerID == client
                         && order.ShippedDate != null)
                         orderby order.OrderDate descending
                         select new
                         {
                             order.CustomerID,
                             order.OrderDate,
                             order.ShippedDate
                         };

            foreach (var od in query4)
            {
                Console.WriteLine("CustomerID : " + od.CustomerID + " OrderDate : " + od.OrderDate + " ShippedDate :" + od.ShippedDate);
            }

            Console.WriteLine("Exercice B.5");
            Console.WriteLine("Entrez un client");
            
            var query5 = from Order_Detail od in northwindEntities.Order_Details
                         group od by od.ProductID;
            
            foreach (IGrouping<int, Order_Detail> orderDetails in query5) // int = le type de la clé
            {
                Console.WriteLine(orderDetails.Key + "", orderDetails.Sum(o => o.UnitPrice * o.Quantity));
            }
            */
            Console.WriteLine("Exercice C.1");
            var query6 = from Customer customer in northwindEntities.Customers
                         select customer;

            foreach (Customer customer in query6)
            {
                customer.ContactName = customer.ContactName.ToUpper();
            }

            try
            {
                northwindEntities.SaveChanges();
            } catch (Exception e)
            {
                Console.WriteLine("Erreur {0}", e.Message);
            }
            Console.WriteLine("Done");

            Console.WriteLine("Exercice C.2");
            var query7 = from Customer customer in northwindEntities.Customers
                         select customer;

            foreach (Customer customer in query6)
            {
                Console.WriteLine(customer.ContactName);
            }

            Console.WriteLine("Exercice D.1");
            Console.WriteLine("Entrez une catégorie");
            string categorie = Console.ReadLine();

            try
            {
                Category catToSupp = (from Category cat in northwindEntities.Categories
                                      where cat.CategoryName == categorie
                                      select cat).First<Category>();

                northwindEntities.Categories.Remove(catToSupp);

            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                Console.WriteLine("Pas de contact trouvé!");
            }

            Console.WriteLine("Exercice D.3");


            Console.ReadKey();
        }
    }
}
