import { create } from 'zustand';
import { Item } from '../types';
import { dummyItems } from '../data/dummyData';

interface ItemsState {
  items: Item[];
  addItem: (item: Omit<Item, 'id'>) => void;
  updateItem: (id: string, item: Partial<Item>) => void;
  deleteItem: (id: string) => void;
}

export const useItemsStore = create<ItemsState>((set) => ({
  items: [...dummyItems],
  addItem: (item) =>
    set((state) => ({
      items: [...state.items, { ...item, id: Math.random().toString(36).substr(2, 9) }],
    })),
  updateItem: (id, updatedItem) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item
      ),
    })),
  deleteItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),
}));