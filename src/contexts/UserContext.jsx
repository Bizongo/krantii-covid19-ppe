import React from 'react';

const UserContext = React.createContext({
  userName: '',
  isLoggedIn: false,
});

export default UserContext;
