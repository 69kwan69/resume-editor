import Section from './Section.jsx';

export default function ContentPage({ data, setData }) {
  return (
    <ul className="content-page">
      <Section title="Profile" icon="user" data={data} setData={setData} />
      <Section title="Contact" icon="at" data={data} setData={setData} />
      <Section
        index={1}
        title="Education"
        icon="graduation-cap"
        data={data}
        setData={setData}
      />
      <Section
        index={2}
        title="Skills"
        icon="lightbulb"
        data={data}
        setData={setData}
      />
      <Section
        index={3}
        title="Experience"
        icon="briefcase"
        data={data}
        setData={setData}
      />
    </ul>
  );
}
