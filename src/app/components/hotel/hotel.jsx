import "./hotel.css";
import { data } from "../../../assets/stays";
import star from "../../../assets/star.png";
export const Hotel = () => {
  return (
    <div className="containerHotel">
      {data &&
        data.map((item, index) => (
          <div className="containerHotel__item">
            <img src={item.photo} alt="photo" />
            <div className="containerHotel__item__info">
              <div className="containerHotel__item__info__top">
                <div className="containerHotel__item__info__top__left">
                  {item.superHost ? (
                    <div className="host">
                      <p>SUPER HOST</p>
                    </div>
                  ) : null}
                  <p>
                    {item.type} {item.beds ? `. ${item.beds} beds` : null}
                  </p>
                </div>
                <div className="containerHotel__item__info__top__right">
                  <img src={star} alt="star" />
                  <p>{item.rating}</p>
                </div>
              </div>
              <div className="containerHotel__item__info__button">
                <p>{item.title}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
