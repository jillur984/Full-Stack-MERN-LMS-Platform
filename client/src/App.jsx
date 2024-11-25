import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/auth";

const App = () => {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />}></Route>
    </Routes>
  );
};

export default App;
