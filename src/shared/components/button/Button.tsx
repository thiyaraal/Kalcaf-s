import "./button.css";

type ButtonProps = {
  label: string;
  onClick: () => void;
  className?: string;
  variant?: "primary" | "secondary";
  disabled?: boolean;
};

export default function Button({
  label,
  onClick,
  className = "",
  variant = "primary",
  disabled = false,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`button button-${variant} ${className}`}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
