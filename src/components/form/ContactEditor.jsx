export default function ContactEditor({ data, setData }) {
  const { phone, email, links } = data.contact;

  return (
    <form className="contact-editor editor">
      <label>
        Phone
        <input
          type="text"
          name="phone"
          defaultValue={phone}
          placeholder="Enter the phone"
          onChange={(e) => {
            const value = e.target.value;
            const newData = JSON.parse(JSON.stringify(data));
            newData.contact.phone = value;
            setData(newData);
          }}
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          defaultValue={email}
          placeholder="Enter the email"
          onChange={(e) => {
            const value = e.target.value;
            const newData = JSON.parse(JSON.stringify(data));
            newData.contact.email = value;
            setData(newData);
          }}
        />
      </label>
      {links.map((link, index) => (
        <label key={index}>
          Link {index + 1}
          <input
            type="text"
            name={`link-${index}`}
            defaultValue={link}
            placeholder="Enter the link"
            onChange={(e) => {
              const value = e.target.value;
              const newData = JSON.parse(JSON.stringify(data));
              newData.contact.links[index] = value;
              setData(newData);
            }}
          />
          {index >= 2 && (
            <button
              className="remove btn"
              type="button"
              aria-label="Remove link"
              title="Remove link"
              onClick={() => {
                const newData = JSON.parse(JSON.stringify(data));
                newData.contact.links.splice(index, 1);
                setData(newData);
              }}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          )}
        </label>
      ))}
      <button
        className="new-link btn"
        type="button"
        onClick={() => {
          const newData = JSON.parse(JSON.stringify(data));
          newData.contact.links.push('');
          setData(newData);
        }}
      >
        <i className="fa-solid fa-fw fa-plus"></i>
        &nbsp; New Link
      </button>
    </form>
  );
}
