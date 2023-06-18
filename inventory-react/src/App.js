import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
// import Login from './component/login';
import Dashboard from './component/dashboard';
import Create from './component/create';
import Edit from './component/edit';
// import Show from './component/show';

function App() {
  return(
    <div>
      <nav>
        <li>
          <Link to={"/"}>Dashboard</Link>
        </li>
        {/* <li>
          <Link to={"/login"}>Login</Link>
        </li> */}
        <li>
          <Link to={"/add/"}>add</Link>
        </li>
      </nav>
      <div>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/add' element={<Create />} />
          <Route path='/edit/:id' element={<Edit />} />
          {/* <Route path='/show/:id' element={<Show />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
