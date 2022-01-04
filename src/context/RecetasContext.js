import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const RecetasContext = createContext();

const RecetasProvider = ({ children }) => {
   const [recetas, setRecetas] = useState([]);
   const [busqueda, setBusquedaRecetas] = useState({
      nombre: '',
      categoria: '',
   });
   const [consultar, setConsultar] = useState(false);

   const { nombre, categoria } = busqueda;

   useEffect(() => {
      if (consultar) {
         const obtenerRecetas = async () => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;

            const resultado = await axios.get(url);

            setRecetas(resultado.data.drinks);
         };

         obtenerRecetas();
      }
   }, [busqueda, categoria, nombre, consultar]);

   return (
      <RecetasContext.Provider
         //
         value={{
            setBusquedaRecetas,
            setConsultar,
         }}>
         {children}
      </RecetasContext.Provider>
   );
};

export default RecetasProvider;
