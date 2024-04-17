import './App.css';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './componenet/navBar/NavBar';
import { AppRouter } from './componenet/router/AppRouter';
import { TopBar } from './componenet/topBar/TopBar';
 
function App() {
  return (
//<MiContexto.Provider value={{usuario, admin}}>   
      <BrowserRouter>
          <div id='wrapper'>
            <NavBar/>
            <div id="content-wrapper" className="d-flex flex-column">

              <div id="content">
              
            <TopBar/>
            <div className="container-fluid">
            <AppRouter/>
            </div>
        </div>

        </div>
        /</div>
    </BrowserRouter>
  //  </MiContexto.Provider>
  );
}

export default App;
