import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
   // State del provider
   const [idReceta, setIdReceta] = useState(null);
   const [infoReceta, setReceta] = useState({});

   // Llamado a la API
   useEffect(() => {
      const obtenerReceta = async () => {
         if (!idReceta) return;

         const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;

         const resultado = await axios.get(url);

         setReceta(resultado.data.drinks[0]);
      };
      obtenerReceta();
   }, [idReceta]);

   return (
      <ModalContext.Provider
         //
         value={{
            infoReceta,
            setIdReceta,
            setReceta,
         }}>
         {children}
      </ModalContext.Provider>
   );
};

export default ModalProvider;
