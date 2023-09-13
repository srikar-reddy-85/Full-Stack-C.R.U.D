import React from 'react';
import { Link } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from './pages/Home';
import logo from './images/logo.png';

function Navbar1() {
  return (
    <nav>
      <div className="navbar-container">
        <div className="navbar-brand">
          <img src={logo} alt="Logo" className="logo" />
          <span>E-LOG BOOK</span>
        </div>
        <ul className="navbar-links">
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Process_master">Process Master</Link>
          </li>
          <li>
            <Link to="/Product_master">Product Master</Link>
          </li>
          <li>
            <Link to="/ProductProcess">P&P</Link>
          </li>
          <li>
            <Link to="#">Logout</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar1;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';
// import logo from './images/logo.png';
// function Navbar1({ isLoggedIn, onLogout }) {
//   const handleLogout = () => {
 
//   localStorage.removeItem('isLoggedIn'); 
//   Navigate('/login'); 
// };

//   return (
//     <nav>
//       <div className="navbar-container">
//         <div className="navbar-brand">
//           <img src={logo} alt="Logo" className="logo" />
//           <span>NFC-LOG BOOK</span>
//         </div>
//         <ul className="navbar-links">
//           <li>
//             <Link to="/Home">Home</Link>
//           </li>
//           <li>
//             <Link to="/Process_master">Process Master</Link>
//           </li>
//           <li>
//             <Link to="/Product_master">Product Master</Link>
//           </li>
//           <li>
//             <Link to="/ProductProcess">P&P</Link>
//           </li>
//             <li>
//               <Link to="/Logout" onClick={handleLogout}>
//                 Logout
//               </Link>
//             </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar1;





