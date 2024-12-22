import { create } from 'zustand';
import { Operator } from '../types';
import { dummyOperators } from '../data/dummyData';

interface OperatorsState {
  operators: Operator[];
  addOperator: (operator: Omit<Operator, 'id'>) => void;
  updateOperator: (id: string, operator: Partial<Operator>) => void;
  deleteOperator: (id: string) => void;
}

export const useOperatorsStore = create<OperatorsState>((set) => ({
  operators: [...dummyOperators],
  addOperator: (operator) =>
    set((state) => ({
      operators: [
        ...state.operators,
        { ...operator, id: Math.random().toString(36).substr(2, 9) },
      ],
    })),
  updateOperator: (id, updatedOperator) =>
    set((state) => ({
      operators: state.operators.map((operator) =>
        operator.id === id ? { ...operator, ...updatedOperator } : operator
      ),
    })),
  deleteOperator: (id) =>
    set((state) => ({
      operators: state.operators.filter((operator) => operator.id !== id),
    })),
}));