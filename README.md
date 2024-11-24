
# Role-Based Access Control (RBAC) System

This is a Role-Based Access Control (RBAC) system built with React. It allows users to manage roles, permissions, and users. The system supports creating, editing, and deleting users and roles, and assigns specific permissions to roles.

## Features

- **User Management**: 
    - Add, edit, and delete users.
    - Assign roles to users.
    - Manage user status (Active/Inactive).
  
- **Role Management**:
    - Create and edit roles.
    - Assign permissions to roles.
    - View and delete roles.

- **Local Storage Persistence**:
    - All data (users and roles) are stored in local storage to persist across page reloads.

## Technologies Used

- **React**: Used for building the frontend and managing state with Context API.
- **CSS**: Used for styling the components.
- **LocalStorage**: For persisting data (users and roles) in the browser.

## How to Use

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/rbac-system.git
    ```

2. Install dependencies:
    ```bash
    cd rbac-system
    npm install
    ```

3. Run the application:
    ```bash
    npm start
    ```

4. Open the application in your browser at `http://localhost:3000`.

## Features in Detail

### User Management

- The **User Management** feature allows you to add, edit, and delete users. 
- Users can be assigned roles such as **Admin** or **User**.
- You can also set their status to **Active** or **Inactive**.
- All users are stored in **localStorage** to persist even after page reloads.

### Role Management

- The **Role Management** section allows you to define roles and their associated permissions.
- Permissions are predefined as:
    - `View`: View access to data.
    - `View & Edit`: View and edit access.
    - `View, Edit, Create, Delete`: Full access to manage data.

- Roles can be created, edited, and deleted.
- Roles are linked to users, ensuring each user gets appropriate permissions based on their assigned role.

## Project Structure

```
/project-root
│
├── /src
│   ├── /context                # Context folder for RBAC
│   │   └── RBACContext.js      # RBAC context file
│   │
│   ├── /pages                  # Pages for the app
│   │   ├── Dashboard.jsx       # Dashboard page
│   │   ├── Dashboard.css       # Styles for the Dashboard page
│   │   ├── Navbar.jsx          # Navbar component
│   │   ├── Navbar.css          # Styles for Navbar
│   │   ├── RoleManagement.jsx  # Role Management page
│   │   └── UserManagement.jsx  # User Management page
│   │
│   ├── App.jsx                 # Main app file
│   ├── Main.jsx                # Entry point to render App component
│   └── styles.css              # Global styles
│
├── index.html                  # HTML file to mount React
├── package.json                # npm package file
└── README.md                   # Readme file for project instructions

```

## How the Data is Stored

The users and roles are stored in the browser's **localStorage** to persist the data even after the page is reloaded. This ensures the data remains intact across sessions.

### Users Data

Each user has the following attributes:
- `id`: Unique identifier for the user.
- `name`: Name of the user.
- `status`: Active or Inactive status.
- `role`: Role assigned to the user.

### Roles Data

Each role has the following attributes:
- `id`: Unique identifier for the role.
- `name`: Name of the role.
- `permissions`: A list of permissions assigned to the role.

## Future Enhancements

- Implement backend API to persist data on the server.
- Add authentication and authorization for more secure access control.
- Implement role-based routing to show/hide components based on user roles.

## Feedback & Suggestions

- Have suggestions or feedback? Feel free to open an issue or contact me on LinkedIn.

## Author

Sourabh Yadav
Frontend Developer | React Enthusiast | Web Developer

