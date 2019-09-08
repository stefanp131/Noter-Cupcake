using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Noter.DAL.Context;
using Noter.DAL.Entities;

namespace Noter.DAL.Repositories
{
    public class TopicsRepository : ITopicsRepository
    {
        private readonly NoterContext context;

        public TopicsRepository(NoterContext context)
        {
            this.context = context;
        }

        public async Task Create(Topic entity)
        {
            await context.Topics.AddAsync(entity);
        }

        public async Task Delete(Guid id)
        {
            var entity = await context.Topics.FirstOrDefaultAsync(e => e.Id == id);
            context.Remove(entity);
        }

        public async Task<Topic> Get(Guid id)
        {
            var entity = await context.Topics.Include(e => e.CreatedBy).FirstOrDefaultAsync(e => e.Id == id);
            return entity;
        }

        public async Task<List<Topic>>  GetAll()
        {
            var list = await context.Topics.ToListAsync();
            return list;
        }

        public async Task Save()
        {
            await context.SaveChangesAsync();
        }
    }
}
