using Microsoft.EntityFrameworkCore;
using Noter.DAL.Entities;

namespace Noter.DAL.Context
{
    public class NoterContext: DbContext
    {
        public NoterContext(DbContextOptions<NoterContext> options): base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Topic> Topics { get; set; }
        public DbSet<Note> Notes { get; set; }
    }
}
