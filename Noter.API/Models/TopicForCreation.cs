﻿using System;
using System.ComponentModel.DataAnnotations;

namespace Noter.API.Models
{
    public class TopicForCreation
    {
        [Required]
        public string Title { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public Guid CreatedById { get; set; }
    }
}
