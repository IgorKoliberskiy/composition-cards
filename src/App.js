import './App.css';
import Cards from './components/Cards';

function App() {
  return (
    <div>
      <Cards>
        <div className="card">
          <div className="card-body">
            <div className="card-img-top">
              <p class="card-img-top__text">Image cap</p>
            </div>
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#top" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </Cards>
      <Cards>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#top" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </Cards>
    </div>
  );
}

export default App;
