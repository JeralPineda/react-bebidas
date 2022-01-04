import {useContext} from 'react';
import {CategoriasContex} from '../context/CategoriasContex';

const Form = () => {
   // Consumiendo el context
   const {categorias} = useContext(CategoriasContex);

   console.log(categorias);

   return (
      <form className="col-md-12">
         <fieldset className="text-center">
            <legend>Busca bebidas por Categoría o Ingrediente</legend>
         </fieldset>

         <div className="row">
            <div className="col-md-4 mt-3">
               <input
                  //
                  type="text"
                  name="nombre"
                  className="form-control"
                  placeholder="Buscar por Ingrediente"
               />
            </div>
            <div className="col-md-4 mt-3">
               <select
                  //
                  name="categoria"
                  className="form-control">
                  <option value="">-- Seleccione una Categoría --</option>
               </select>
            </div>
            <div className="col-md-4 mt-3">
               <button type="submit" className="btn btn-block btn-primary">
                  Buscar Recetas
               </button>
            </div>
         </div>
      </form>
   );
};

export default Form;
