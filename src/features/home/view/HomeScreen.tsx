import AuthHeader from "../../../shared/components/header/AuthHeader";
import "./HomeScreen.css";
import { useNavigate } from "react-router-dom";
import Button from "../../../shared/components/button/Button";
import MenuCard from "../../../shared/components/card/MenuCard";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import SearchBar from "../../../shared/components/search_bar/SearchBar";
import { useCategoryViewModel } from "../viewModel/CategoryMenuViewModel";

const HomeScreen = () => {
  const navigate = useNavigate();

  const favMenus = [
    {
      image: "https://i.postimg.cc/Nj8nSsrq/image-18.png",
      title: "Seafood Pasta",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      price: "$10.00",
    },
    {
      image: "https://i.postimg.cc/4y5qS4Qv/image-19.png",
      title: "Seafood Pasta 2",
      description: "Another menu description",
      price: "$12.00",
    },
    {
      image: "https://i.postimg.cc/7YRmYThV/image-22.png",
      title: "Seafood Pasta 3",
      description: "Another menu description",
      price: "$11.00",
    },
  ];

  const { categories, activeCategoryId, selectCategory } =
    useCategoryViewModel();

  const [activeIndex, setActiveIndex] = useState(1);

  const prev = () => {
    setActiveIndex((prev) => (prev === 0 ? favMenus.length - 1 : prev - 1));
  };

  const next = () => {
    setActiveIndex((prev) => (prev === favMenus.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <section className="header">
        <AuthHeader title="Kalcaf's" subtitle="" />
        <SearchBar />
        <div
          className="header-icon-purchase"
          onClick={() => navigate("/purchase")}
          style={{ cursor: "pointer" }}
        >
          <FaShoppingCart />
        </div>
      </section>

      <section className="main">
        <div className="home-main-content">
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
          <div className="carousel-wrapper">
            <Button
              className="btn-carousel"
              label="<"
              onClick={() => {
                prev();
              }}
            />

            <div className="carousel">
              {favMenus.map((menu, index) => {
                let variant: "active" | "side" = "side";
                if (index === activeIndex) variant = "active";

                return <MenuCard key={index} {...menu} variant={variant} />;
              })}
            </div>

            <Button
              className="btn-carousel"
              label=">"
              onClick={() => {
                next();
              }}
            />
          </div>
        </div>

        <div className="main-content-menu-button">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={
                activeCategoryId === category.id ? "primary" : "secondary"
              }
              className="button-order-btn"
              label={category.categoryName}
              onClick={() => selectCategory(category.id)}
            />
          ))}
        </div>

        {/* <div className="main-content-menu-item">
          {loading ? (
            <p>Loading menu...</p>
          ) : menuItems.length > 0 ? (
            menuItems.map((item) => (
              <MenuCard
                key={item.id}
                image={item.image}
                title={item.title}
                description={item.description}
                price={`$${item.price.toFixed(2)}`}
                variant="side"
              />
            ))
          ) : (
            <p>No menu items available</p>
          )}
        </div> */}
      </section>
    </>
  );
};

export default HomeScreen;
