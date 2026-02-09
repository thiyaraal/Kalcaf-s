import "./TextInput.css";

type Props = {
  label?: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
};

export default function TextInput({
  label,
  type,
  placeholder,
  value,
  onChange,
}: Props) {
  return (
    <div className="text-input">
      {label && <label htmlFor="text-input">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
