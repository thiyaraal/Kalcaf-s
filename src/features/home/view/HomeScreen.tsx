import { FaShoppingCart } from "react-icons/fa";
import AuthHeader from "../../../shared/components/header/AuthHeader";
import "./HomeScreen.css";
import TextInput from "../../../shared/components/text_input/TextInput";
import Button from "../../../shared/components/button/Button";

const HomeScreen = () => {
  return (
    <>
      <section className="header">
        <AuthHeader title="Kalcaf's" subtitle="" />
        <TextInput
          type="text"
          placeholder="Enter your search"
          value=""
          onChange={() => {}}
        />
        <div className="header-icon-purchase">
          <FaShoppingCart />
        </div>
      </section>

      <section className="main">
        <div className="main-content">
          <div className="main-content-left">
            <p className="main-content-title">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting.
            </p>
            <Button
              className="button-order"
              label={"Order Now"}
              onClick={() => {}}
            />
          </div>
          <div className="main-content-right">
            <img
              src="https://i.postimg.cc/NFZbnV4Y/Group-3.png"
              alt="Cafe Interior"
            />
          </div>
        </div>
        <div className="main-content-top-menu">
          <div className="main-content-top-menu-title">
            <p className="title">Top Menu</p>
            <p className="subtitle">This is the most popular item</p>
          </div>
          <div className="main-content-top-menu-list">
            <div className="main-content-top-menu-list-item">
              <img
                src="https://i.postimg.cc/Nj8nSsrq/image-18.png"
                alt="Seafood Pasta"
              />
              <p className="menu-name">Seafood Pasta</p>
              <p className="menu-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <p className="menu-price">$12.99</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeScreen;
