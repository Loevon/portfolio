﻿using System;
using System.ComponentModel.DataAnnotations;

namespace server.Entities
{
    public class Project
    {
		// private Guid id;
        private string title { get; set; }
        private string tools { get; set; }
        private string description { get; set; }
        private string repository { get; set; }
        private string link { get; set; }

        // TODO: do image here

        public Project()
        {
        }

        [Key]
		public Guid ID { get; set; }


		public void GetSomehting() {
			
		}
    }
}