import Header from './Header.jsx';
import Contact from './Contact.jsx';
import Section from './Section.jsx';

export default function Resume({ data }) {
  const { fullname, specialized, photo } = data;
  const contact = data.contact;
  const profile = data.sections[0];
  const education = data.sections[1];
  const skills = data.sections[2];
  const experience = data.sections[3];

  return (
    <div className="resume">
      <Header fullname={fullname} specialized={specialized} photo={photo} />
      <Contact contact={contact} />
      <Section section={profile} />
      <Section section={education} />
      <Section section={skills} />
      <Section section={experience} />
    </div>
  );
}
