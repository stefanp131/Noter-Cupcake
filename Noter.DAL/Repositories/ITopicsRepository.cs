using Noter.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Noter.DAL.Repositories
{
    public interface ITopicsRepository
    {
        Task Create(Topic entity);
        Task<Topic> Get(Guid id);
        Task<List<Topic>> GetAll();
        Task Delete(Guid id);
        Task Save();
    }
}
