import { useState } from 'react';
import ItemList from './ItemList.jsx';
import ItemEditor from './ItemEditor.jsx';
import ProfileEditor from './ProfileEditor.jsx';
import ContactEditor from './ContactEditor.jsx';

export default function Section({ index, title, icon, data, setData }) {
  const [isOpen, setOpen] = useState(false);
  const [isEditing, setEditing] = useState(false);
  const [selectedItemIndex, selectItemIndex] = useState(null);

  return (
    <>
      <li className={`section ${isOpen && 'open'}`}>
        <button className="btn" onClick={() => setOpen(!isOpen)}>
          <i className={`fa-solid fa-fw fa-${icon}`}></i>
          <h2>{title}</h2>
          <i className="fa-solid fa-fw fa-chevron-right"></i>
        </button>
      </li>
      {isOpen &&
        (title == 'Profile' ? (
          <ProfileEditor data={data} setData={setData} />
        ) : title == 'Contact' ? (
          <ContactEditor data={data} setData={setData} />
        ) : isEditing ? (
          <ItemEditor
            sectionIndex={index}
            data={data}
            setData={setData}
            itemIndex={selectedItemIndex}
            setEditing={setEditing}
          />
        ) : (
          <ItemList
            sectionIndex={index}
            data={data}
            setData={setData}
            selectItemIndex={selectItemIndex}
            setEditing={setEditing}
          />
        ))}
    </>
  );
}
