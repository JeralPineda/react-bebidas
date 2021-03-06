import { useContext, useState } from 'react';
import { CategoriasContex } from '../context/CategoriasContex';
import { RecetasContext } from '../context/RecetasContext';

const Form = () => {
   const [busqueda, setBusqueda] = useState({
      nombre: '',
      categoria: '',
   });

   // Consumiendo el context
   const { categorias } = useContext(CategoriasContex);
   const { setBusquedaRecetas, setConsultar } = useContext(RecetasContext);

   // Leer los contenidos
   const handleChange = (e) => {
      setBusqueda({
         ...busqueda,
         [e.target.name]: e.target.value,
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      setBusquedaRecetas(busqueda);

      setConsultar(true);
   };

   return (
      <form
         //
         className="col-md-12"
         onSubmit={handleSubmit}>
         <fieldset className="text-center">
            <legend>Busca bebidas por Categoría o Ingrediente</legend>
         </fieldset>

         <div className="row mt-3">
            <div className="col-md-4 mt-1">
               <input
                  //
                  type="text"
                  name="nombre"
                  className="form-control"
                  placeholder="Buscar por Ingrediente"
                  onChange={handleChange}
               />
            </div>
            <div className="col-md-4 mt-1">
               <select
                  //
                  name="categoria"
                  className="form-control"
                  onChange={handleChange}>
                  <option value="">-- Seleccione una Categoría --</option>

                  {categorias.map((categoria) => (
                     <option
                        //
                        key={categoria.strCategory}
                        value={categoria.strCategory}>
                        {categoria.strCategory}
                     </option>
                  ))}
               </select>
            </div>

            <div className="col-md-4 mt-1">
               {busqueda.nombre === '' || busqueda.categoria === '' ? (
                  <button type="submit" className="btn btn-block btn-primary disabled">
                     Buscar Recetas
                  </button>
               ) : (
                  <button type="submit" className="btn btn-block btn-primary">
                     Buscar Recetas
                  </button>
               )}
            </div>
         </div>
      </form>
   );
};

export default Form;
