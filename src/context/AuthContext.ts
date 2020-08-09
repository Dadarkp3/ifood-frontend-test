import { createContext } from 'react';

interface AuthContext {
  token: string;
}

const authContext = createContext<AuthContext>({} as AuthContext);
