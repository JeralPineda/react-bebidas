import { useContext } from 'react';
import { ModalContext } from '../context/ModalContext';

const Receta = ({ receta }) => {
   // Extraer los valores del context
   const { setIdReceta } = useContext(ModalContext);

   const handleClick = () => {
      setIdReceta(receta.idDrink);
   };

   return (
      <div className="col-md-4 mb-3">
         <div
            //
            className="card"
            onClick={handleClick}>
            <img src={receta.strDrinkThumb} alt={`Imagen de ${receta.strDrink}`} className="card-img-top" />

            <div className="card-body">
               <h2 className="card-title">{receta.strDrink}</h2>
            </div>
            {/* <button type="button" className="btn btn-block btn-primary">
               Ver Receta
            </button> */}
         </div>
      </div>
   );
};

export default Receta;
