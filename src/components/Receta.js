const Receta = ({ receta }) => {
   return (
      <div className="col-md-4 mb-3">
         <div className="card">
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
