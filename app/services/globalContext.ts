import { createContext, useContext } from 'react';
import mainRepository from '@/app/services/api';

export const context = {
  mainRepository
};

export const globalContext = createContext({
  user: "minh",
});

export function useGlobalContext() {
  return useContext(globalContext);
}