import '../styles/app.css';
import { useState } from 'react';

import Resume from './resume/Resume.jsx';
import Form from './form/Form.jsx';

import sampleData from '../sample/sampleData.js';
import defaultStyling from '../sample/defaultStyling.js';

export default function App() {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem('data')) || sampleData
  );
  const [styling, setStyling] = useState(
    JSON.parse(localStorage.getItem('styling')) || defaultStyling
  );

  localStorage.setItem('data', JSON.stringify(data));
  localStorage.setItem('styling', JSON.stringify(styling));

  const { accent, text } = styling.colors;
  const { font } = styling;

  const root = document.querySelector('#root');
  root.style.setProperty('--clr-accent', accent);
  root.style.setProperty('--clr-text', text);
  root.style.setProperty('--font-selected', `var(--font-${font})`);

  return (
    <>
      <Form
        data={data}
        styling={styling}
        setData={setData}
        setStyling={setStyling}
      />
      <Resume data={data} />
    </>
  );
}
