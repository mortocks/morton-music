import React, { createContext, useContext, useState } from "react";

interface AppContextInterface {
  isVisible: boolean;
  toggleVisible: () => void;
}

const initialPlayerContext: AppContextInterface = {
  isVisible: false,
  toggleVisible: () => {},
};

const PlayerContext = createContext<AppContextInterface>(initialPlayerContext);

export const PlayerProvider = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const context = {
    isVisible,
    toggleVisible: () => setIsVisible(!isVisible),
  };

  return (
    <PlayerContext.Provider value={context}>{children}</PlayerContext.Provider>
  );
};

export const usePlayerContext = (): AppContextInterface =>
  useContext(PlayerContext);
