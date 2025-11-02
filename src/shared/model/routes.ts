import "react-router-dom";

export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  BOARDS: "/boards",
  BOARD: "/boards/:id",
} as const;

export type PathParams = {
  [ROUTES.BOARD]: {
    id: string;
  };
};

declare module "react-router-dom" {
  interface Register {
    params: PathParams;
  }
}