using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Noter.API.Controllers
{
    [Authorize]
    [Route("api/test")]
    public class TestController: Controller
    {
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok("test");
        }
    }
}
