import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";

const App = () => {
  return (
    <BrowserRouter>
      {/* Your routes and components go here */}
      <Routes>
       <Route path="/" element={<UserLayout />}>
       {/* User Layout */}
       </Route>
       <Route>{/* Admin Layout */}</Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;