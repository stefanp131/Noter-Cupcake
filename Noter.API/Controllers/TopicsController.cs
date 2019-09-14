using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Noter.API.Models;
using Noter.DAL.Entities;
using Noter.DAL.Repositories;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Noter.API.Controllers
{
    [Authorize]
    [Route("api/topic")]
    [ApiController]
    public class TopicsController: ControllerBase
    {
        private readonly ITopicsRepository repository;

        public TopicsController(ITopicsRepository repository)
        {
            this.repository = repository;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(Guid id)
        {
            var entity = await repository.Get(id);
            var dto = new TopicForRetrieval
            {
                Id = entity.Id,
                Title = entity.Title,
                Description = entity.Description,
                CreatedBy = entity.CreatedBy.Username,
                CreatedById = entity.CreatedById
            };

            return Ok(dto);
        }

        [HttpGet()]
        public async Task<IActionResult> GetAll([FromQuery] QueryForTopic query)
        {
             var entities = await repository.GetAll(new DAL.Models.QueryForTopic
            {
                CurrentPage = query.CurrentPage,
                PageSize = query.PageSize,
                SearchItemQuery = query.SearchItemQuery
            });
            var dtos = new List<TopicForRetrieval>();

            foreach (var entity in entities)
            {
                var dto = new TopicForRetrieval
                {
                    Id = entity.Id,
                    Title = entity.Title,
                    Description = entity.Description,
                    CreatedBy = entity.CreatedBy.Username,
                    CreatedById = entity.CreatedById
                };

                dtos.Add(dto);
            }

            return Ok(dtos);
        }

        [HttpPost]
        public async Task<IActionResult> Create(TopicForCreation topicForCreation)
        {
            var entity = new Topic
            {
                Title = topicForCreation.Title,
                Description = topicForCreation.Description,
                CreatedById = topicForCreation.CreatedById
            };

            await repository.Create(entity);
            await repository.Save();

            return Ok();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Create(Guid id, TopicForUpdate topicforUpdate)
        {
            var entity = await repository.Get(id);

            entity = new Topic
            {
                Title = topicforUpdate.Title,
                Description = topicforUpdate.Description,
            };

            await repository.Save();

            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            await repository.Delete(id);
            await repository.Save();

            return NoContent();
        }
    }
}
