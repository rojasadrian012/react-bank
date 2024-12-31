import React from "react";

import "./style.css";
import { AppRouter } from "./core/router";
import { ProfileProvider } from "./core/profile";

export const App: React.FC = () => {
  return (
    <ProfileProvider>
      <AppRouter />
    </ProfileProvider>
  );
};
