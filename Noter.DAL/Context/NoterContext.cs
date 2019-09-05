using Microsoft.EntityFrameworkCore;
using Noter.DAL.Entities;

namespace Noter.DAL.Context
{
    public class NoterContext: DbContext
    {
        public NoterContext(DbContextOptions<NoterContext> options): base(options)
        {
            Database.Migrate();
        }

        public DbSet<User> Users { get; set; }
    }
}
