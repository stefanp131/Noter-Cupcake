using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Noter.API.Models
{
    public class NoteForRetrieval
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public Guid? CreatedById { get; set; }        
        public string CreatedBy { get; set; }
        public Guid? TopicId { get; set; }
        public string Topic { get; set; }
    }
}
