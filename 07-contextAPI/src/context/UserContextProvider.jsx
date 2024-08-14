import React, { useState } from "react";
import UserContext from "./UserContext";
function UserContextProvider({ children }) {
  // children is basically all the props we want the all the tree components to have access to.
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
