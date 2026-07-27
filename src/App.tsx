import { RouterProvider } from "react-router-dom";
import "./App.css";
import LoginPage from "./login/user_login";

function App() {
  return (
    <>
      <RouterProvider router={AppRoutes}></RouterProvider>
      <div className="App">
        <LoginPage />
      </div>
    </>
  );
}

export default App;
