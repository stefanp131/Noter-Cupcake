using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Noter.DAL.Entities
{
    public class Note
    {
        [Key]
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public Guid? CreatedById { get; set; }
        [ForeignKey("CreatedById")]
        public User CreatedBy { get; set; }
    }
}
