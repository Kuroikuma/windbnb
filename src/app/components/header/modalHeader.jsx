import lupa from "../../../assets/lupaBlanca.png";
import ubication from "../../../assets/ubication.png";
export const ModalHeader = (props) => {
  const {
    locations,
    location,
    setLocation,
    showLocation,
    setShowLocation,
    showGuest,
    setShowGuest,
    Children,
    adults,
    guest,
    setChildren,
    setAdults,
    setGuest,
    handleHotelSearch,
  } = props;
  const handleShowLocation = () => {
    setShowGuest(false);
    setShowLocation(!showLocation);
  };
  const handleShowGuest = () => {
    setShowLocation(false);
    setShowGuest(!showGuest);
  };
  const handlerLocation = (event) => {
    setLocation(event.target.innerText);
  };
  const handlerIncreaseChildCounter = () => {
    setChildren(Children + 1);
    setGuest(guest + 1);
  };
  const handlerDecreaseChildCounter = () => {
    setChildren(Children - 1);
    setGuest(guest - 1);
  };
  const handlerIncreaseAdultCounter = () => {
    setAdults(adults + 1);
    setGuest(guest + 1);
  };
  const handlerDecreaseAdultCounter = () => {
    setAdults(adults - 1);
    setGuest(guest - 1);
  };
  return (
    <>
      <div className="containerModalHeader">
        <div className="containerModalHeader__top">
          <div
            onClick={handleShowLocation}
            className={
              showLocation
                ? "containerModalHeader__top__item showLocation"
                : "containerModalHeader__top__item"
            }
          >
            <p className="containerModalHeader__top__item__title">Location</p>
            {showLocation ? (
              <p className="containerModalHeader__top__item__show">
                {location}
              </p>
            ) : (
              <p className="containerModalHeader__top__item__add">
                add location
              </p>
            )}
          </div>
          <div
            onClick={handleShowGuest}
            className={
              showGuest
                ? "containerModalHeader__top__item showGuest"
                : "containerModalHeader__top__item"
            }
          >
            <p className="containerModalHeader__top__item__title">Guest</p>
            {showGuest ? (
              <p className="containerModalHeader__top__item__show">
                {guest} &nbsp;guests
              </p>
            ) : (
              <p className="containerModalHeader__top__item__add">add guest</p>
            )}
          </div>
          <div className="containerModalHeader__top__item">
            <button
              onClick={handleHotelSearch}
              className="containerModalHeader__top__item__search"
            >
              <img src={lupa} alt="lupa" />
              <p>Search</p>
            </button>
          </div>
        </div>
        <div className="containerModalHeader__Botton">
          <div
            className={
              showLocation
                ? "containerModalHeader__Botton__location showLocation"
                : "containerModalHeader__Botton__location"
            }
          >
            {locations &&
              locations.map((item, index) => (
                <div
                  className="containerModalHeader__Botton__location__item"
                  key={index}
                >
                  <img src={ubication} alt="" />
                  <p onClick={handlerLocation}>{item}</p>
                </div>
              ))}
          </div>
          <div
            className={
              showGuest
                ? "containerModalHeader__Botton__guest showGuest"
                : "containerModalHeader__Botton__guest"
            }
          >
            <div className="containerModalHeader__Botton__guest__item">
              <div className="containerModalHeader__Botton__guest__item__info">
                <p>Adults</p>
                <p id="range">Ages 13 or above</p>
              </div>
              <div className="containerModalHeader__Botton__guest__item__accountant">
                <button onClick={handlerDecreaseAdultCounter}>-</button>
                <p>{adults}</p>
                <button onClick={handlerIncreaseAdultCounter}>+</button>
              </div>
            </div>
            <div className="containerModalHeader__Botton__guest__item">
              <div className="containerModalHeader__Botton__guest__item__info">
                <p>Children</p>
                <p id="range">Ages 2-12</p>
              </div>

              <div className="containerModalHeader__Botton__guest__item__accountant">
                <button onClick={handlerDecreaseChildCounter}>-</button>
                <p>{Children}</p>
                <button onClick={handlerIncreaseChildCounter}>+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
