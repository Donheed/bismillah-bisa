import { Role, User, Item, Operator, BorrowItem } from '../types';

// Dummy Users (removed USER role)
export const dummyUsers: User[] = [
  { id: '1', username: 'admin', password: 'admin123', role: Role.ADMIN },
  { id: '2', username: 'operator', password: 'operator123', role: Role.OPERATOR },
];

// Dummy Items
export const dummyItems: Item[] = [
  {
    id: '1',
    name: 'Laptop Dell XPS',
    amount: 5,
    condition: 'Baik',
    created_at: new Date('2024-01-15'),
  },
  {
    id: '2',
    name: 'Proyektor Epson',
    amount: 3,
    condition: 'Baik',
    created_at: new Date('2024-02-01'),
  },
  {
    id: '3',
    name: 'Arduino Kit',
    amount: 10,
    condition: 'Baru',
    created_at: new Date('2024-02-15'),
  },
];

// Dummy Operators
export const dummyOperators: Operator[] = [
  {
    id: '1',
    name: 'Radit',
    username: 'RaditGay',
    password: 'radit123',
  },
  {
    id: '2',
    name: 'Syela',
    username: 'SyelaGamink',
    password: 'Syela123',
  },
];

// Dummy Borrowings
export const dummyBorrowings: BorrowItem[] = [
  {
    id: '1',
    item_name: 'Laptop Dell XPS',
    amount: 1,
    borrow_date: new Date('2024-03-01'),
    return_date: new Date('2024-03-08'),
    borrower_name: 'Farand',
    officer_name: 'Syela',
    status: 'BORROWED',
  },
  {
    id: '2',
    item_name: 'Proyektor Epson',
    amount: 1,
    borrow_date: new Date('2024-03-02'),
    return_date: new Date('2024-03-09'),
    borrower_name: 'Veri',
    officer_name: 'Radit',
    status: 'RETURNED',
  },
];