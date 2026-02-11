import AuthHeader from "../../../shared/components/header/AuthHeader";
import "./Purchase.css";

export default function PurchaseScreen() {
  return (
    <>
      <AuthHeader className="header-menu" title="Kalcaf's" subtitle="" />
      <section className="main-content">
        <div className="title">
          <h3 className="title-text">Your Order</h3>
        </div>
      </section>
    </>
  );
}
