// // src/App.js
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import NavBar from "./components/NavBar"; // Import NavBar component
// import Login from "./pages/Login";
// import SignUp from "./pages/SignUp";
// import ToDoApp from "./pages/ToDoApp";
// import ExpenseTracker from "./pages/ExpenseTracker";
// import Blog from "./pages/Blog";
// import AddDevice from "./pages/AddDevice";
// import Contact from "./pages/Contact";
// import ProductCatalog from "./pages/ProductCatalog";
// import Home from "./pages/Home"; // Import Home page if you have one

// function App() {
//   return (
//     <Router>
//       <NavBar /> {/* Add NavBar component */}
//       <Switch>
//         <Route path="/login" component={Login} />
//         <Route path="/signup" component={SignUp} />
//         <Route path="/todo" component={ToDoApp} />
//         <Route path="/expense-tracker" component={ExpenseTracker} />
//         <Route path="/blog" component={Blog} />
//         <Route path="/add-device" component={AddDevice} />
//         <Route path="/contact" component={Contact} />
//         <Route path="/product-catalog" component={ProductCatalog} />
//         <Route path="/" component={Home} exact /> {/* Default Home page */}
//       </Switch>
//     </Router>
//   );
// }

// export default App;

// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Use Routes instead of Switch
import NavBar from "./components/NavBar"; // Import NavBar component
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ToDoApp from "./pages/ToDoApp";
import ExpenseTracker from "./pages/ExpenseTracker";
import Blog from "./pages/Blog";
import AddDevice from "./pages/AddDevice";
import Contact from "./pages/Contact";
import ProductCatalog from "./pages/ProductCatalog";
import Home from "./pages/Home"; // Import Home component
import FamilyAccess from "./pages/FamilyAccess";

function App() {
  return (
    <Router>
      <NavBar /> {/* Add NavBar component */}
      <Routes>
        {" "}
        {/* Replace Switch with Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/todo" element={<ToDoApp />} />
        <Route path="/expense-tracker" element={<ExpenseTracker />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/add-device" element={<AddDevice />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product-catalog" element={<ProductCatalog />} />
        <Route path="/family-access" element={<FamilyAccess />} />

        <Route path="/" element={<Home />} /> {/* Default Home page */}
      </Routes>
    </Router>
  );
}

export default App;
