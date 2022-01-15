import React, { useState } from "react";
import { data } from "../../assets/stays";
const Context = React.createContext({});
export const HotelsContextProvider = ({ children }) => {
  const [hotels, setHotels] = useState(
    data.filter(
      (element) => element.country === "Finland" && element.city === "Helsinki"
    )
  );

  return (
    <Context.Provider value={{ hotels, setHotels }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
