import "./header.css";
import { ModalHeader } from "./modalHeader.jsx";

export const HeaderView = (props) => {
  const {
    setChildren,
    setAdults,
    setGuest,
    Children,
    adults,
    guest,
    location,
    locations,
    setLocation,
    lupa,
    logo,
    Modal,
    isOpen,
    closeModal,
    showLocation,
    setShowLocation,
    showGuest,
    setShowGuest,
    handleShowGuest,
    handleShowLocation,
    handleHotelSearch,
  } = props;
  return (
    <>
      <div className="containerHeader">
        <div className="containerHeader__Right">
          <img src={logo} alt="logo" />
        </div>
        <div className="containerHeader__left">
          <div
            className="containerHeader__left__location"
            onClick={handleShowLocation}
          >
            <p>{location}</p>
          </div>
          <div
            className="containerHeader__left__guest"
            onClick={handleShowGuest}
          >
            <p>Add guests</p>
          </div>
          <div className="containerHeader__left__search">
            <img src={lupa} alt="lupa" />
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <ModalHeader
          locations={locations}
          location={location}
          setLocation={setLocation}
          showLocation={showLocation}
          setShowLocation={setShowLocation}
          showGuest={showGuest}
          setShowGuest={setShowGuest}
          guest={guest}
          adults={adults}
          Children={Children}
          setChildren={setChildren}
          setAdults={setAdults}
          setGuest={setGuest}
          handleHotelSearch={handleHotelSearch}
        />
      </Modal>
    </>
  );
};
