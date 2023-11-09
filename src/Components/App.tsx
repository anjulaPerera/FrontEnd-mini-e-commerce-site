import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "react-confirm-alert/src/react-confirm-alert.css";
import { RouteName } from "../RouteName";
import "../components/vendors/styles/styles.css";

const App: React.FC = () => {
  return (
    // <Router>
    //   <Switch>
    //     <Route path={RouteName.LOGIN}>{/* <Login /> */}</Route>

    //     <Route path="/">
    //       {/* <Auth> */}

    //       <div className="page-container">
    //         <div className="content-wrap">
    //           <Router>
    //             <Switch>
    //               <Route path="/admin">
    //                 {/* <VerifyRole allow={[Role.SUPER_ADMIN]}> */}
    //                 {/* <SuperAdminRouter /> */}
    //                 {/* </VerifyRole> */}
    //               </Route>
    //             </Switch>
    //           </Router>
    //         </div>
    //         {/* <Footer /> */}
    //       </div>

    //       {/* </Auth> */}
    //     </Route>
    //   </Switch>
    // </Router>

    <div className="fw-800 letter-spacing-D1em">PRODUCTS</div>
  );
};

// const SuperAdminRouter: React.FC = () => {
//   return (
//     // <ContentLayout>
//     <Router>
//       <Route
//         path={[
//           RouteName.ADMIN_USER_MANAGEMENT,
//           RouteName.ADMIN_DEMO_USERS,
//           RouteName.ADMIN_SUBSCRIPTIONS,
//           RouteName.ADMIN_USER_MANAGEMENT_TournamentList,
//           RouteName.ADMIN_USER_MANAGEMENT_Tournament,
//         ]}
//         exact
//         render={() => <>{/* <NavBar /> */}</>}
//       />
//       {/* <Content> */}
//       <Switch>
//         <Route path={RouteName.ADMIN_USER_MANAGEMENT}>
//           {/* <UserManagement /> */}
//         </Route>

//         <Route path="*">{/* <NotFound /> */}</Route>
//       </Switch>
//       {/* </Content> */}
//     </Router>
//     // </ContentLayout>
//   );
// };

export default App;
