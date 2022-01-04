import { useContext, useState } from 'react';
import { ModalContext } from '../context/ModalContext';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
   const top = 50;
   const left = 50;

   return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
   };
}

const useStyles = makeStyles((theme) => ({
   //    paper: {
   //       position: 'absolute',
   //       width: 400,
   //       backgroundColor: theme.palette.background.paper,
   //       boxShadow: theme.shadows[5],
   //       padding: theme.spacing(2, 4, 3),
   //    },
   paper: {
      position: 'absolute',
      width: 300,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      overflow: 'auto',
      height: '100%',
      maxHeight: 500,
      display: 'block',
   },
   header: {
      padding: '12px 0',
      borderBottom: '1px solid darkgrey',
   },
   content: {
      padding: '12px 0',
      overflow: 'auto',
   },
}));

const Receta = ({ receta }) => {
   // Configuración de modal de material-ui
   const [modalStyle] = useState(getModalStyle);
   const [open, setOpen] = useState(false);

   const classes = useStyles();

   const handleOpen = () => setOpen(true);

   const handleClose = () => {
      setIdReceta(null);
      setReceta({});
      setOpen(false);
   };

   const handleClick = () => {
      setIdReceta(receta.idDrink);
      handleOpen();
   };

   // Extraer los valores del context
   const { infoReceta, setIdReceta, setReceta } = useContext(ModalContext);

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
         </div>

         <Modal
            //
            open={open}
            onClose={handleClose}>
            <div style={modalStyle} className={classes.paper}>
               <h2>{infoReceta.strDrink}</h2>
               <h3 className="mt-4">Instrucciones</h3>
               <p>{infoReceta.strInstructions}</p>

               <img src={infoReceta.strDrinkThumb} alt="" className="img-fluid my-4" />
            </div>
         </Modal>
      </div>
   );
};

export default Receta;
