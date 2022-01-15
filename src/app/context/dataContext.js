import React, { useState } from "react";
import { data } from "../../assets/stays";
const Context = React.createContext({});
export const HotelsContextProvider = ({ children }) => {
  const [hotels, setHotels] = useState(data);

  return (
    <Context.Provider value={{ hotels, setHotels }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
