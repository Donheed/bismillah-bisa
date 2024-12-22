export enum Role {
  ADMIN = 'ADMIN',
  OPERATOR = 'OPERATOR'
}

export interface User {
  id: string;
  username: string;
  password: string;
  role: Role;
}

export interface Item {
  id: string;
  name: string;
  amount: number;
  condition: string;
  created_at: Date;
}

export interface Operator {
  id: string;
  name: string;
  username: string;
  password: string;
}

export interface BorrowItem {
  id: string;
  item_name: string;
  amount: number;
  borrow_date: Date;
  return_date: Date;
  borrower_name: string;
  officer_name: string;
  status: 'BORROWED' | 'RETURNED';
}