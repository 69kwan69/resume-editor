import sampleData from '../../sample/sampleData.js';
import defaultStyling from '../../sample/defaultStyling.js';

export default function ConfigPage({ styling, setStyling, setData }) {
  const { accent, text } = styling.colors;
  const { font } = styling;

  return (
    <ul className="config-page">
      <li>
        <h2>Colors</h2>
        <div className="color-options">
          <div className="option accent">
            <h3>Accent color:</h3>
            <label>
              <input
                type="color"
                name="color-accent"
                defaultValue={accent}
                onChange={(e) => {
                  const color = e.target.value;
                  const newStyling = JSON.parse(JSON.stringify(styling));
                  newStyling.colors.accent = color;
                  setStyling(newStyling);
                }}
              />
              <div className="input" style={{ background: accent }}></div>
              <span className="value">{accent}</span>
            </label>
          </div>
          <div className="option text">
            <h3>Text color:</h3>
            <label>
              <input
                type="color"
                name="color-text"
                defaultValue={text}
                onChange={(e) => {
                  const color = e.target.value;
                  const newStyling = JSON.parse(JSON.stringify(styling));
                  newStyling.colors.text = color;
                  setStyling(newStyling);
                }}
              />
              <div className="input" style={{ background: text }}></div>
              <span className="value">{text}</span>
            </label>
          </div>
        </div>
      </li>
      <li>
        <h2>Fonts</h2>
        <div className="font-options">
          <button
            className={font == 'sans' ? 'option sans selected' : 'option sans'}
            onClick={() => {
              const newStyling = { ...styling, font: 'sans' };
              setStyling(newStyling);
            }}
          >
            <span className="font-test">Aa</span>
            <span className="font-type">Sans</span>
          </button>
          <button
            className={
              font == 'serif' ? 'option serif selected' : 'option serif'
            }
            onClick={() => {
              const newStyling = { ...styling, font: 'serif' };
              setStyling(newStyling);
            }}
          >
            <span className="font-test">Aa</span>
            <span className="font-type">Serif</span>
          </button>
        </div>
      </li>
      <li>
        <button
          className="reset btn"
          onClick={() => {
            setData(sampleData);
            setStyling(defaultStyling);
          }}
        >
          Reset to default
        </button>
      </li>
    </ul>
  );
}
