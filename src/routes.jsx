import React from "react";

// Protected Component
import { Protected } from "./components/common/Protected";

// Routes

import Home from "./routes/Home";
import SignIn from "./routes/SignIn";

export const ROUTES = [
  {
    path: "/",
    title: "Home",
    protected: true,
    element: (
      <Protected>
        <Home />
      </Protected>
    ),
  },
  {
    path: "/signin",
    title: "Sign In Page",
    protected: false,
    element: <SignIn />,
  },
];
