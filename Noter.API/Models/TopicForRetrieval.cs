using System;

namespace Noter.API.Models
{
    public class TopicForRetrieval
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string CreatedBy { get; set; }
        public Guid? CreatedById { get; set; }
    }
}
