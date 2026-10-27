"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type User = {
  firstName?: string;
  lastName?: string;
  email?: string;
};

type AuthContextValue = {
  user: User | null;
  isAuthenticated: boolean;
  // false until the stored session has been read on the client
  ready: boolean;
  login: (token: string, user: User) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      const stored = localStorage.getItem("user");
      if (token) setUser(stored ? JSON.parse(stored) : {});
    } catch {
      // storage unavailable or corrupt: treat as logged out
    }
    setReady(true);
  }, []);

  const login = (token: string, nextUser: User) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(nextUser ?? {}));
    setUser(nextUser ?? {});
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, ready, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error("useAuth must be used within an AuthProvider");
  return context;
}
