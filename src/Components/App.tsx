import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import LoginPage from "./pages/Login";
import NavBar from "./common/NavBar";
import MainPage from "./pages/MainPage";
import Auth from "./common/Auth";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import FavsPage from "./pages/FavsPage";
import SearchResults from "./pages/SearchResults";

// const App: React.FC = () => {
//   return (
//     <Router>
//       <NavBar />
//       <Switch>
//         <Route path="/login">
//           <LoginPage />
//         </Route>
//         <Route path="/">
//           <Auth>
//             <Route path="/home">
//               <MainPage />
//             </Route>
//             <Route path="/add-product">
//               <AddProduct />
//             </Route>
//             <Route path="/update-product">
//               <EditProduct />
//             </Route>
//             <Route path="/favorites">
//               <FavsPage />
//             </Route>
//             <Route path="/products">
//               <SearchResults searchQuery="abc" searchResults={[]} />
//             </Route>
//             <Route path="/search-results">
//               <MainPage />
//             </Route>
//           </Auth>
//         </Route>
//       </Switch>
//     </Router>
//   );
// };

// export default App;

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>

        <Route path="/">
          {/* <Auth> */}
          <div className="page-container">
            <div className="content-wrap">
              <Router>
                <Switch>
                  <Route path="/home">
                    <MainPage />
                  </Route>
                  <Redirect from="/" to="/home" />
                </Switch>
              </Router>
            </div>
          </div>

          {/* </Auth> */}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
