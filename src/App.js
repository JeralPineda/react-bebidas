import Form from './components/Form';
import Header from './components/Header';
import CategoriasProvider from './context/CategoriasContex';

function App() {
   return (
      <CategoriasProvider>
         <Header />
         <div className="container mt-5">
            <div className="row">
               <Form />
            </div>
         </div>
      </CategoriasProvider>
   );
}

export default App;
