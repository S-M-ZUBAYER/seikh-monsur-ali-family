import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./assets/Component/Routes/Routes";

function App() {
  return (
    <div className="app">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
