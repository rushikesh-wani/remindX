import { RouterProvider } from "react-router-dom";
import appRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="App">
      <RouterProvider router={appRoutes} />
    </div>
  );
}

export default App;
