import { useContext } from 'react';
import Receta from './Receta';
import { RecetasContext } from '../context/RecetasContext';

const ListRecetas = () => {
   // Extraemos las recetas del Context
   const { recetas } = useContext(RecetasContext);

   if (recetas.length === 0) return null;

   return (
      <div className="row mt-5">
         {recetas.map((receta) => (
            <Receta
               //
               key={receta.idDrink}
               receta={receta}
            />
         ))}
      </div>
   );
};

export default ListRecetas;
