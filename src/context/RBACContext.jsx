import React, { createContext, useState, useEffect } from 'react';

export const RBACContext = createContext();

export const RBACProvider = ({ children }) => {
  // Get users from localStorage if available, otherwise use initial state
  const storedUsers = localStorage.getItem('users');
  const initialUsers = storedUsers
    ? JSON.parse(storedUsers)
    : [
        { id: 1, name: 'John Doe', status: 'Active', role: 'Admin' },
        { id: 2, name: 'Jane Smith', status: 'Active', role: 'User' },
      ];

  const [users, setUsers] = useState(initialUsers);

  // Get roles from localStorage if available, otherwise use initial state
  const storedRoles = localStorage.getItem('roles');
  const initialRoles = storedRoles
    ? JSON.parse(storedRoles)
    : [
        { id: 1, name: 'Admin', permissions: ['create', 'edit', 'delete', 'view'] },
        { id: 2, name: 'User', permissions: ['view'] },
      ];

  const [roles, setRoles] = useState(initialRoles);

  // Persist users to localStorage whenever the users state changes
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  // Persist roles to localStorage whenever the roles state changes
  useEffect(() => {
    localStorage.setItem('roles', JSON.stringify(roles));
  }, [roles]);

  // Add a new role (helper function for external use if needed)
  const addRole = (roleName, permissions) => {
    const newRole = {
      id: roles.length + 1, // Auto-generate a new ID
      name: roleName,
      permissions,
    };
    const updatedRoles = [...roles, newRole];
    setRoles(updatedRoles);
  };

  // Delete a role (optional helper)
  const deleteRole = (roleId) => {
    const updatedRoles = roles.filter((role) => role.id !== roleId);
    setRoles(updatedRoles);
  };

  return (
    <RBACContext.Provider
      value={{
        users,
        setUsers,
        roles,
        setRoles,
        addRole, // Exposing addRole to other components
        deleteRole, // Exposing deleteRole to other components
      }}
    >
      {children}
    </RBACContext.Provider>
  );
};
