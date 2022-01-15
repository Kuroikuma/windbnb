import "./page.css";
import { Header } from "../components/header/header.js";
import { Hotel } from "../components/hotel/hotel";
import { HotelsContextProvider } from "../context/dataContext";

export const Page = () => {
  return (
    <HotelsContextProvider>
      <div className="containerPage">
        <Header />
        <div className="stayTitle">
          <h3>Stays in Finland</h3>
          <p>12+ stays</p>
        </div>
        <Hotel />
        <div className="containerFooter">
          <p>created by OdiseoJR - devChallenges.io</p>
        </div>
      </div>
    </HotelsContextProvider>
  );
};
