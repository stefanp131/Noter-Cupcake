using Noter.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Noter.DAL.Repositories
{
    public interface INotesRepository
    {
        Task Create(Note entity);
        Task<Note> Get(Guid id);
        Task<List<Note>> GetForTopic(Guid topicId);
        Task<List<Note>> GetAll();
        Task Delete(Guid id);
        Task Save();
    }
}
