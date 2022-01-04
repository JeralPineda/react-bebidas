import axios from 'axios';
import {createContext, useEffect, useState} from 'react';

// Crear el Context
export const CategoriasContex = createContext();

// Provider es donde se encuentran las funciones y state
const CategoriasProvider = ({children}) => {
   // Creando el state del Context
   const [categorias, setCategorias] = useState([]);

   // Ejecutar el llamado a la API
   useEffect(() => {
      const obtenerCategorias = async () => {
         const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;

         const categoria = await axios.get(url);

         setCategorias(categoria.data.drinks);
      };
      obtenerCategorias();
   }, []);
   return (
      <CategoriasContex.Provider
         // valores disponibles en los demas componentes
         value={{
            categorias,
         }}>
         {children}
      </CategoriasContex.Provider>
   );
};

export default CategoriasProvider;
