import Button from "../button/Button";
import "./MenuCard.css";

type MenuCardProps = {
  image: string;
  title: string;
  description: string;
  price: string;
  buttonLabel?: string;
  onAdd?: () => void;
  variant?: "active" | "side";
};

const MenuCard = ({
  image,
  title,
  description,
  price,
  buttonLabel = "add",
  onAdd,
  variant = "side",
}: MenuCardProps) => {
  return (
    <div className={`menu-card ${variant}`}>
      <img src={image} alt={title} className="menu-card-image" />

      <div className="card-body">
        <h5 className="card-title">{title}</h5>

        <p className="card-text">{description}</p>

        <div className="button-order-wrapper">
          <p className="price">{price}</p>
          <Button
            className="button-order-btn"
            label={buttonLabel}
            onClick={onAdd || (() => {})}
          />
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
