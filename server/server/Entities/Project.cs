using System;
using System.ComponentModel.DataAnnotations;

namespace server.Entities
{
    public class Project
    {
		[Key]
		public int id;
		public string title { get; set; }
		public string tools { get; set; }
		public string description { get; set; }
		public string repository { get; set; }
		public string link { get; set; }

        // TODO: do image here
        
        public Project()
        {
        }

  //      [Key]
		//public int ID { get; set; }


		//public void GetSomehting() {
			
		//}
    }
}
