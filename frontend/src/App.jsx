import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      {/* Your routes and components go here */}
      <Routes>
       <Route>{/* User Layout */}</Route>
       <Route>{/* Admin Layout */}</Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;