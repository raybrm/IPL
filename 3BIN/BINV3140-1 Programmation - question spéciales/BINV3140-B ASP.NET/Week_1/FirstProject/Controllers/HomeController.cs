using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using FirstProject.Models;

namespace FirstProject.Controllers
{
    public class HomeController : Controller
    {
        /*
         * ENDPOINT
         * La requete HTTP sera traité par la méthode Index. 
         * Le return est la réponse à la requete HTTP qui sera envoyé au navigateur 
         * La méthode Index() définit une 'action' et produit une réponse contenant de l'HTML
        */
        public ViewResult Index()
        {
            int hour = DateTime.Now.Hour;
            string viewModel = hour < 12 ? "Good Morning" : "Good Afternoon";
            return View("MyView", viewModel); // retourn une vue appelé MyView avec un paramètre
        }
    }
}
