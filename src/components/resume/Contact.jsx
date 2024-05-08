export default function Contact({ contact }) {
  const { phone, email, links } = contact;

  return (
    <section id="contact">
      <ul>
        <li>
          <i className="fa-solid fa-fw fa-phone"></i>&nbsp;
          {phone}
        </li>
        <li>
          <i className="fa-solid fa-fw fa-envelope"></i>&nbsp;
          {email}
        </li>
        {links.map((link, index) => (
          <li key={index}>
            <i className="fa-solid fa-fw fa-globe"></i>&nbsp;
            {link}
          </li>
        ))}
      </ul>
    </section>
  );
}
