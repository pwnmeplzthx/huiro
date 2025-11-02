import { ROUTES } from "@/shared/model/routes";
import { AppHeader } from "@/widgets/header";
import { Outlet, useLocation } from "react-router-dom";
import { Providers } from "./providers";

export function App() {
  const location = useLocation();

  const isAuthPage =
    location.pathname === ROUTES.LOGIN || location.pathname === ROUTES.REGISTER;
  return (
    <Providers>
      <div className="bg-gray-100">
        {!isAuthPage && <AppHeader />}
        <Outlet />
      </div>
    </Providers>
  );
}
