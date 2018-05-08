using System;
namespace server.Entities
{
    public class Project
    {
        private int id { get; set; }
        private string title { get; set; }
        private string tools { get; set; }
        private string description { get; set; }
        private string repository { get; set; }
        private string link { get; set; }

        // TODO: do image here

        public Project()
        {
        }
    }
}
