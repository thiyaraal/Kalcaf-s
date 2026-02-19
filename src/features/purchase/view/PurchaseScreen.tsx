import {
  FaAngleLeft,
  FaRegMinusSquare,
  FaRegPlusSquare,
  FaTrash,
} from "react-icons/fa";
import AuthHeader from "../../../shared/components/header/AuthHeader";
import "./Purchase.css";

export default function PurchaseScreen() {
  return (
    <>
      <AuthHeader className="header-purchase" title="Kalcaf's" subtitle="" />
      <section className="main-purchase">
        <div className="title-icon-purchase">
          <FaAngleLeft size={18}></FaAngleLeft>
          <h5 className="title-text">Your Order</h5>
        </div>

        <div className="purchase-content">
          <div className="purchase-card">
            <div className="image-purchase">
              <img
                className="image-purchase-img"
                src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Latte"
              />
            </div>
            <div className="purchase-menu-detail">
              <div className="detail-menu">
                <div className="menu-name">
                  <p className="title-purchase"> Choco Latte Mil</p>
                  <p className="price-purchase"> IDR 56.000</p>
                </div>
                <div className="menu-delete">
                  <FaTrash color="grey"> </FaTrash>
                </div>
              </div>

              <div className="purchase-menu-detail-button">
                <div className="menu-action-button">
                  <div className="action-button">
                    <button className="purchase-menu-detail-button-minus">
                      <FaRegMinusSquare color="grey"> </FaRegMinusSquare>
                    </button>
                    <p> 1 </p>
                    <button className="purchase-menu-detail-button-plus">
                      <FaRegPlusSquare color="orange"> </FaRegPlusSquare>
                    </button>
                  </div>
                </div>
                <div className="menu-price">
                  <p className="price-purchase"> IDR 56.000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
