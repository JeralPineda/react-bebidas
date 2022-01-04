import Form from './components/Form';
import Header from './components/Header';
import CategoriasProvider from './context/CategoriasContex';
import RecetasProvider from './context/RecetasContext';
import ListRecetas from './components/ListRecetas';

function App() {
   return (
      <CategoriasProvider>
         <RecetasProvider>
            <Header />

            <div className="container mt-5">
               <div className="row">
                  <Form />
               </div>

               <ListRecetas />
            </div>
         </RecetasProvider>
      </CategoriasProvider>
   );
}

export default App;
