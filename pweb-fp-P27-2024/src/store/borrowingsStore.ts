import { create } from 'zustand';
import { BorrowItem } from '../types';
import { dummyBorrowings } from '../data/dummyData';

interface BorrowingsState {
  borrowings: BorrowItem[];
  addBorrowing: (borrowing: Omit<BorrowItem, 'id'>) => void;
  updateBorrowing: (id: string, borrowing: Partial<BorrowItem>) => void;
  deleteBorrowing: (id: string) => void;
}

export const useBorrowingsStore = create<BorrowingsState>((set) => ({
  borrowings: [...dummyBorrowings],
  addBorrowing: (borrowing) =>
    set((state) => ({
      borrowings: [
        ...state.borrowings,
        { ...borrowing, id: Math.random().toString(36).substr(2, 9) },
      ],
    })),
  updateBorrowing: (id, updatedBorrowing) =>
    set((state) => ({
      borrowings: state.borrowings.map((borrowing) =>
        borrowing.id === id ? { ...borrowing, ...updatedBorrowing } : borrowing
      ),
    })),
  deleteBorrowing: (id) =>
    set((state) => ({
      borrowings: state.borrowings.filter((borrowing) => borrowing.id !== id),
    })),
}));