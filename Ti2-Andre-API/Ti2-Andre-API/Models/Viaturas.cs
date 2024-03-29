﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Ti2_Andre_API.Models {
   public class Viaturas {


      public int ID { get; set; }

      public string Matricula { get; set; }

      public string Marca { get; set; }

      public string Modelo { get; set; }

      public string Cor { get; set; }

      public string NomeDono { get; set; }

      public string MoradaDono { get; set; }

      public string CodPostalDono { get; set; }

      // lista das multas associadas à Viatura
      public ICollection<Multas> ListaDeMultas { get; set; }
   }
}