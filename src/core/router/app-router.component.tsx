import { BrowserRouter, Route, Routes } from "react-router-dom";
import { appRoutes } from "./routes";
import {
  AccountListPage,
  LoginPage,
  MovementListPage,
  TransferPage,
} from "@/page";

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={appRoutes.root} element={<LoginPage />} />
        <Route path={appRoutes.accountList} element={<AccountListPage />} />
        <Route path={appRoutes.movements} element={<MovementListPage />} />
        <Route path={appRoutes.transfer} element={<TransferPage />} />
        <Route
          path={appRoutes.transferFromAccount}
          element={<TransferPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};
