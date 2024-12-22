import { create } from 'zustand';
import { Role, User } from '../types';
import { dummyUsers } from '../data/dummyData';

interface AuthState {
  user: User | null;
  login: (username: string, password: string, role: Role) => boolean;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  login: (username, password, role) => {
    const user = dummyUsers.find(
      (u) => u.username === username && u.password === password && u.role === role
    );
    
    if (user) {
      set({ user });
      localStorage.setItem('user', JSON.stringify(user));
      return true;
    }
    return false;
  },
  logout: () => {
    set({ user: null });
    localStorage.removeItem('user');
  },
}));