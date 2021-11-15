import React, { useRef, useContext, createContext } from "react";

interface GlobalContextProps {
  aboutRef: React.RefObject<HTMLDivElement>;
}

const GlobalContext = createContext<GlobalContextProps>(
  {} as GlobalContextProps
);

const GlobalContextProvider: React.FC = ({ children }) => {
  const aboutRef = useRef<HTMLDivElement>(null);

  return (
    <GlobalContext.Provider value={{ aboutRef }}>
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobal = () => {
  const data = useContext(GlobalContext);
  return { ...data };
};

export { GlobalContextProvider, useGlobal };

// export const UserContext = createContext<GlobalContextProps>({} as GlobalContextProps);

// export const UserProvider = () => {
//   return (
//     <UserContext.Provider>

//     </UserContext.Provider>
//   )
// }
