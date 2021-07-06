import './App.css';
import NavBar from './components/NavBar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
             <h4>Las ofertas de la semana</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
