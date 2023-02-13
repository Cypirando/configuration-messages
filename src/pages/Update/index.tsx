// import React from "react";
// import { Route, useParams } from "react-router-dom";
// import TableConfig from "../../components/TableConfig";

// const RatingConfiguration: React.FC = () => {
//   const params = useParams<{ state: string }>();
//   let state: any;
//   if (params.state) {
//     state = JSON.parse(decodeURIComponent(params.state));
//   }

//   return (
//     <div>
//       {state && <div>{state.someProperty}</div>}
//     </div>
//   );
// };

// const App: React.FC = () => {
//   return (
//     <div>
//       <Route path="/rating-configuration">
//         <RatingConfiguration />
//       </Route>
//       <TableConfig />
//     </div>
//   );
// };

// export default App;
