import React, { useState } from "react";
import logo from "../../../assets/logo.svg";
import lupa from "../../../assets/magnifying-glass.png";
import { HeaderView } from "./header.jsx";
import { useModal } from "../../hooks/useModal";
import { Modal } from "../modal/modal";

export const Header = () => {
  const locations = [
    "Helsinki, Finland",
    "Turku,Finland",
    "Oulu, Finland",
    "Vaasa, Finland",
  ];
  const [isOpen, openModal, closeModal] = useModal(false);
  const [showLocation, setShowLocation] = useState(false);
  const [showGuest, setShowGuest] = useState(false);
  const [location, setLocation] = useState(locations[0]);
  const [guest, setGuest] = useState(0);
  const [adults, setAdults] = useState(0);
  const [Children, setChildren] = useState(0);

  const handleShowGuest = () => {
    openModal();
    setShowGuest(true);
  };
  const handleShowLocation = () => {
    openModal();
    setShowLocation(true);
  };

  return (
    <HeaderView
      Modal={Modal}
      isOpen={isOpen}
      openModal={openModal}
      closeModal={closeModal}
      lupa={lupa}
      logo={logo}
      setChildren={setChildren}
      setAdults={setAdults}
      setGuest={setGuest}
      guest={guest}
      adults={adults}
      Children={Children}
      location={location}
      locations={locations}
      setLocation={setLocation}
      showLocation={showLocation}
      setShowLocation={setShowLocation}
      showGuest={showGuest}
      setShowGuest={setShowGuest}
      handleShowGuest={handleShowGuest}
      handleShowLocation={handleShowLocation}
    />
  );
};
