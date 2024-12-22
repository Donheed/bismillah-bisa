import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Login } from './pages/Login';
import { Rules } from './pages/Rules';
import { ItemsPage } from './pages/admin/ItemsPage';
import { OperatorsPage } from './pages/admin/OperatorsPage';
import { BorrowingSummary } from './pages/admin/BorrowingSummary';
import { BookEquipment } from './pages/operator/BookEquipment';
import { EquipmentList } from './pages/operator/EquipmentList';
import { BorrowersList } from './pages/operator/BorrowersList';
import { useAuthStore } from './store/authStore';
import { Role } from './types';

const App = () => {
  const user = useAuthStore((state) => state.user);

  // Protected Route wrapper
  const ProtectedRoute = ({ children, allowedRoles }: { children: React.ReactNode, allowedRoles: Role[] }) => {
    if (!user) {
      return <Navigate to="/" replace />;
    }

    if (!allowedRoles.includes(user.role)) {
      return <Navigate to="/rules" replace />;
    }

    return <>{children}</>;
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={user ? <Navigate to="/rules" /> : <Login />}
            />
            <Route path="/rules" element={<Rules />} />
            
            {/* Admin Routes */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute allowedRoles={[Role.ADMIN]}>
                  <ItemsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/all-operator"
              element={
                <ProtectedRoute allowedRoles={[Role.ADMIN]}>
                  <OperatorsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/summary"
              element={
                <ProtectedRoute allowedRoles={[Role.ADMIN]}>
                  <BorrowingSummary />
                </ProtectedRoute>
              }
            />

            {/* Operator Routes */}
            <Route
              path="/operator/book-equipment"
              element={
                <ProtectedRoute allowedRoles={[Role.OPERATOR]}>
                  <BookEquipment />
                </ProtectedRoute>
              }
            />
            <Route
              path="/operator/all-equipment"
              element={
                <ProtectedRoute allowedRoles={[Role.OPERATOR]}>
                  <EquipmentList />
                </ProtectedRoute>
              }
            />
            <Route
              path="/operator/borrowers"
              element={
                <ProtectedRoute allowedRoles={[Role.OPERATOR]}>
                  <BorrowersList />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;