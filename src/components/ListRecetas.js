import { useContext } from 'react';
import Receta from './Receta';
import { RecetasContext } from '../context/RecetasContext';
import CardLoader from './CardLoader';

const ListRecetas = () => {
   // Extraemos las recetas del Context
   const { recetas, cargando } = useContext(RecetasContext);

   if (recetas.length === 0) return null;

   return (
      <div className="row mt-5">
         {recetas.map((receta) =>
            cargando ? (
               <Receta
                  //
                  key={receta.idDrink}
                  receta={receta}
               />
            ) : (
               <CardLoader key={receta.idDrink} />
            )
         )}
      </div>
   );
};

export default ListRecetas;
