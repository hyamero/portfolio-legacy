import React, { useRef, useContext, createContext, useState } from "react";

interface GlobalContextProps {
  aboutRef: React.RefObject<HTMLDivElement>;
  loaderComplete: boolean;
  setLoaderComplete: React.Dispatch<React.SetStateAction<boolean>>;
}

const GlobalContext = createContext<GlobalContextProps>(
  {} as GlobalContextProps
);

const GlobalContextProvider: React.FC = ({ children }) => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const [loaderComplete, setLoaderComplete] = useState<boolean>(false);

  return (
    <GlobalContext.Provider
      value={{ aboutRef, loaderComplete, setLoaderComplete }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobal = () => {
  const data = useContext(GlobalContext);
  return { ...data };
};

export { GlobalContextProvider, useGlobal };
