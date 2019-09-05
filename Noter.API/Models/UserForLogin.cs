using System.ComponentModel.DataAnnotations;

namespace Noter.API.Models
{
    public class UserForLogin
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }
}
