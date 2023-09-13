import './App.css';
import './index.css'
import Navbar from './Navbar1'
import Home from './Home';
import Process_master from './Process_master';
import Product_master from './Product_master';
import ProductProcess from './ProductProcess';
import LoginPage from './LoginPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Process_master" element={<Process_master />} />
        <Route path="/Product_master" element={<Product_master />} />
        <Route path="/ProductProcess" element={<ProductProcess />} />
      </Routes>
    </Router>
  );
}

export default App;


// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import Navbar from './Navbar1';
// import Home from './Home';
// import Process_master from './Process_master';
// import Product_master from './Product_master';
// import ProductProcess from './ProductProcess';
// import Logout from './Logout';
// import LoginPage from './LoginPage';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const ProtectedRoute = ({ element }) => {
//     return isLoggedIn ? element : <Navigate to="/login" />;
//   };

//   return (
//     <Router>
//       {isLoggedIn && <Navbar />}
//       <Routes>
//         <Route
//           path="/login"
//           element={<LoginPage onLogin={() => setIsLoggedIn(true)} />}
//         />
//         <Route
//           path="/"
//           element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
//         />
//         <Route
//           path="/home"
//           element={<Home />}
//         />
//         <Route
//           path="/Process_master"
//           element={<ProtectedRoute element={<Process_master />} />}
//         />
//         <Route
//           path="/Product_master"
//           element={<ProtectedRoute element={<Product_master />} />}
//         />
//         <Route
//           path="/ProductProcess"
//           element={<ProtectedRoute element={<ProductProcess />} />}
//         />
//         {/* <Route
//           path="/Logout"
//           element={<ProtectedRoute element={<Logout />} />}
//         /> */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import Navbar from './Navbar1';
// import Home from './Home';
// import Process_master from './Process_master';
// import Product_master from './Product_master';
// import ProductProcess from './ProductProcess';
// import LoginPage from './LoginPage';
// import AuthGuard from './AuthGaurd'; // Import the AuthGuard component

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <Router>
//       {isLoggedIn && <Navbar />}
//       <Routes>
//         <Route
//           path="/login"
//           element={
//             isLoggedIn ? (
//               <Navigate to="/Home" />
//             ) : (
//               <LoginPage onLogin={() => setIsLoggedIn(true)} />
//             )
//           }
//         />
//         <Route
//           path="/"
//           element={
//             isLoggedIn ? (
//               <AuthGuard>
//                 <Navbar />
//                 <Route path="/Home" element={<Home />} />
//                 <Route path="/Process_master" element={<Process_master />} />
//                 <Route path="/Product_master" element={<Product_master />} />
//                 <Route path="/ProductProcess" element={<ProductProcess />} />

//               </AuthGuard>
//             ) : (
//               <Navigate to="/login" />
//             )
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import Navbar from './Navbar1';
// import Home from './Home';
// import Process_master from './Process_master';
// import Product_master from './Product_master';
// import ProductProcess from './ProductProcess';
// import LoginPage from './LoginPage';
// import AuthGuard from './AuthGaurd';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('isLoggedIn'));

//   return (
//     <Router>
//       {isLoggedIn && <Navbar />}
//       <Routes>
//         <Route
//           path="/login"
//           element={
//             isLoggedIn ? (
//               <Navigate to="/Home" />
//             ) : (
//               <LoginPage onLogin={() => setIsLoggedIn(true)} />
//             )
//           }
//         />
//         <Route
//           path="/"
//           element={
//             isLoggedIn ? (
//               <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/Process_master" element={<Process_master />} />
//                 <Route path="/Product_master" element={<Product_master />} />
//                 <Route path="/ProductProcess" element={<ProductProcess />} />
//               </Routes>
//             ) : (
//               <Navigate to="/login" />
//             )
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;













