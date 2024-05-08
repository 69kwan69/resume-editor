export default function Item({ item }) {
  const { title, subtitle, content } = item;

  return (
    <li className="item">
      {title && <h3 className="title">{title}</h3>}
      {subtitle && <p className="subtitle">{subtitle}</p>}
      <p className="content">{content}</p>
    </li>
  );
}
