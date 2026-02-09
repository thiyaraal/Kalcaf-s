import "./AuthHeader.css";

type Props = {
  title: string;
  subtitle: string;
  className?: string;
};

export default function AuthHeader({ title, subtitle }: Props) {
  return (
    <section className="header">
      <div className="header-logo">
        <h3 className="logoTitle">{title}</h3>
        <p className="logoSubtitle">{subtitle}</p>
      </div>
    </section>
  );
}
