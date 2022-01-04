import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
   // State del provider
   const [idReceta, setIdReceta] = useState(null);

   return (
      <ModalContext.Provider
         //
         value={{
            setIdReceta,
         }}>
         {children}
      </ModalContext.Provider>
   );
};

export default ModalProvider;
