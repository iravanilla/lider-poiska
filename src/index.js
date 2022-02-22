import React from 'react';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './index.scss';
import { App } from './App';
import { Cards } from './components/Cards';
import { Basket } from './components/Basket';

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Cards />}></Route>
        <Route path='/basket' element={<Basket />}>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <Switch>
//         <Route path="/test"> 
//           Это тест 
//         </Route>  
//         <Route path="/">  
//           <App />
//         </Route>  
//       </Switch>
//     </Router> 
//   </React.StrictMode>,
//   document.getElementById('root')
// );

