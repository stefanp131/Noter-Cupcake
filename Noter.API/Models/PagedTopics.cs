using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Noter.API.Models
{
    public class PagedTopics
    {
        public int TotalPages { get; set; }
        public List<TopicForRetrieval> TopicsForRetrieval { get; set; } = new List<TopicForRetrieval>();
    }
}
