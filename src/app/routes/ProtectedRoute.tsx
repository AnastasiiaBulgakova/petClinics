import React from 'react';
import { Navigate } from 'react-router-dom';

import { RoleType } from '@/shared/services/types/mainTypes';

const ProtectedRoute = ({ children, requiredRole }: { children: React.ReactNode; requiredRole: RoleType }) => {
  const token = localStorage.getItem('jwtToken');
  const role = localStorage.getItem('role');

  if (!token || role !== requiredRole) {
    return <Navigate to='/sign-in' />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
