import Item from './Item.jsx';

export default function Section({ section }) {
  const { title, items } = section;
  const id = title.trim().replace(' ', '-').toLowerCase();

  return (
    <section id={id}>
      <h2 className="title">{title}</h2>
      <ul className="content">
        {items.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </ul>
    </section>
  );
}
