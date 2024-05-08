import ContentPage from './ContentPage.jsx';
import ConfigPage from './ConfigPage.jsx';
import { useState } from 'react';

export default function Form({ data, styling, setData, setStyling }) {
  const [tab, setTab] = useState('content');

  return (
    <div className="form">
      <header className="tab">
        <button
          className={`content ${tab == 'content' && 'active'}`}
          onClick={() => setTab('content')}
        >
          Content
        </button>
        <button
          className={`config ${tab == 'config' && 'active'}`}
          onClick={() => setTab('config')}
        >
          Config
        </button>
      </header>
      {tab == 'content' ? (
        <ContentPage data={data} setData={setData} />
      ) : (
        <ConfigPage
          styling={styling}
          setStyling={setStyling}
          setData={setData}
        />
      )}
    </div>
  );
}
