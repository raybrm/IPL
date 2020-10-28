using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PartyInvites.Models;

namespace PartyInvites.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index() // action method
        {
            return View(); // default view
        }

        [HttpGet]
        public ViewResult RsvpForm()
        {
            return View();
        }

        [HttpPost]
        public ViewResult RsvpForm(GuestResponse guestResponse)
        {
            if (ModelState.IsValid) // Regarder si il y a eu des problèmes de validation
            {
                Repository.AddResponse(guestResponse);
                return View("Thanks", guestResponse); //appel de la vue Thanks
            } else
            {
                return View();
            }
        }

        public ViewResult ListResponses()
        {
            return View(Repository.Responses.Where(r => r.WillAttend == true)); // requete Linq
        }
        // Page 42
    }
}
