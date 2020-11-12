using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SportsStore.Models;
using SportsStore.Models.ViewModels;

namespace SportsStore.Controllers
{
    // Gère les requetes HTTP
    public class HomeController : Controller
    {
        private IStoreRepository repository;
        public int PageSize = 4; // 4 produits par page

        public HomeController(IStoreRepository repo)
        {
            repository = repo;
        }

        public IActionResult Index(string category, int productPage = 1) // Paramètre de la requete HTTP grâce au model binding, categorie peut être null
        {
            return View(new ProductsListViewModel
            {
                Products = repository.Products
                          .Where(p => category == null || p.Category == category)
                          .OrderBy(p => p.ProductID)
                          .Skip((productPage - 1) * PageSize)
                          .Take(PageSize),
                PagingInfo = new PagingInfo
                {
                    CurrentPage = productPage,
                    ItemsPerPage = PageSize,
                    TotalItems = category == null ? repository.Products.Count() : repository.Products.Where(e => e.Category == category).Count()
                }
            });
        }
    }
}
