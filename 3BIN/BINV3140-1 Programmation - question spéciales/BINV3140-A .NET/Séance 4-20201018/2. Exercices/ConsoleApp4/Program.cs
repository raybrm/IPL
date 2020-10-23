using System;
using System.Collections.Generic;
using System.Data.Entity.Core;
using System.Data.Entity.Core.Objects;
using System.Linq;
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


            Console.WriteLine("Exercice B.2");
            Console.WriteLine("Entrez un pays");
            string pays = Console.ReadLine();

            IQueryable<Product> query2 = from Product p in northwindEntities.Products
                                          select p;

            foreach (Product pro in query2)
            {
                if (pro.Supplier.Country == pays)
                {
                    Console.WriteLine(" {0} - {1}", pro.ProductName, pro.Supplier.Country);
                }
            }

            Console.ReadKey();
        }
    }
}
