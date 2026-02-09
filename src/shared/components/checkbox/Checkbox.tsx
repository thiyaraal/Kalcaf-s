import "./checkbox.css";

type CheckboxProps = {
  id: string;
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
};

export function Checkbox({
  id,
  label,
  checked = false,
  onChange,
}: CheckboxProps) {
  return (
    <div className="checkbox">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
