import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// TODO: Setup firebase auth before using AuthContext
// ---------- //
import { AuthContext } from "./context/AuthContext";

// HINT: To have firebase database accessible to entire app, initilize it here
// ---------- //
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase";
const app = initializeApp(firebaseConfig);

// import { getDatabase } from 'firebase/database';
// export const db = getDatabase(app);

import { ROUTES } from "./routes";

function App() {
  const router = createBrowserRouter(ROUTES);
  return (
    <>
      <AuthContext>
        <RouterProvider router={router}></RouterProvider>
      </AuthContext>
    </>
  );
}

export default App;
