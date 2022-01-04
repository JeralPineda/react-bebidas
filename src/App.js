import Form from './components/Form';
import Header from './components/Header';
import CategoriasProvider from './context/CategoriasContex';
import RecetasProvider from './context/RecetasContext';
import ListRecetas from './components/ListRecetas';
import ModalProvider from './context/ModalContext';

function App() {
   return (
      <CategoriasProvider>
         <RecetasProvider>
            <ModalProvider>
               <Header />

               <div className="container mt-5 loading-skeleton">
                  <div className="row">
                     <Form />
                  </div>

                  <ListRecetas />
               </div>
            </ModalProvider>
         </RecetasProvider>
      </CategoriasProvider>
   );
}

export default App;
