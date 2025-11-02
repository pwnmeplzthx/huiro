import { ROUTES } from "../shared/model/routes";
import { createBrowserRouter, redirect } from "react-router-dom";
import { App } from "./app";
import { lazyRoute } from "@/shared/lib/lazyRoute";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: ROUTES.BOARDS,
        lazy: lazyRoute(() => import("@/pages/boards/BoardsListPage")),
      },
      {
        path: ROUTES.BOARD,
        lazy: lazyRoute(() => import("@/pages/boards/BoardPage")),
      },
      {
        path: ROUTES.LOGIN,
        lazy: lazyRoute(() => import("@/pages/auth/LoginPage")),
      },
      {
        path: ROUTES.REGISTER,
        lazy: lazyRoute(() => import("@/pages/auth/RegisterPage")),
      },
      {
        path: ROUTES.HOME,
        loader: () => redirect(ROUTES.BOARDS),
      },
    ],
  },
]);