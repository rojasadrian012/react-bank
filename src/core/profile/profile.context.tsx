import React from "react";

interface Context {
  userName: string;
  setUserName: (name: string) => void;
}

const userName = "No logueado.";

const ProfileContext = React.createContext<Context>({
  userName,
  setUserName: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const ProfileProvider: React.FC<Props> = ({ children }) => {
  const [userName, setUserName] = React.useState<string>("");

  return (
    <ProfileContext.Provider
      value={{
        userName,
        setUserName,
      }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfileContext = () => React.useContext(ProfileContext);
