using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using Web.Siath.Models;

namespace Web.Siath.Controllers
{
    //[Authorize]
    public class HomeController : Controller
    {
        
     

        public IActionResult Index()
        {

            return View();
        }
       

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        public IActionResult _Menu()
        {
            return new PartialViewResult
            {
                ViewName = "_Menu",
                ViewData = ViewData,
            };
        }

        public IActionResult Perfil()
        {
            return View();
        }

    }
}