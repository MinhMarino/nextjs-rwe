'use client'
import { createContext, useContext } from 'react';
import mainRepository from '@/app/services/api';

export const context = {
  mainRepository
};

export const AppGlobalContext = createContext({
  mainRepository
});

export function useGlobalContext() {
  return useContext(AppGlobalContext);
}

export const AppProvider = ({children }: {children: React.ReactNode}) => {
  return (
    <AppGlobalContext.Provider value={context}>
      {children}
    </AppGlobalContext.Provider>
  )
}