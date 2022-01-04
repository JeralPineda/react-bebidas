import {createContext, useState} from 'react';

// Crear el Context
export const CategoriasContex = createContext();

// Provider es donde se encuentran las funciones y state
const CategoriasProvider = ({children}) => {
   // Creando el state del Context
   const [hola, setHola] = useState('Hola que tal');

   return (
      <CategoriasContex.Provider
         // valores disponibles en los demas componentes
         value={{
            hola,
         }}>
         {children}
      </CategoriasContex.Provider>
   );
};

export default CategoriasProvider;
