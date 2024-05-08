export default function ItemEditor({
  sectionIndex,
  data,
  setData,
  itemIndex,
  setEditing,
}) {
  const item = data.sections[sectionIndex].items[itemIndex];
  const { title, subtitle, content } = item;
  return (
    <form className="item-editor editor">
      <label>
        Title
        <input
          type="text"
          name="title"
          defaultValue={title}
          placeholder="Enter the title"
          onChange={(e) => {
            const value = e.target.value;
            const newData = JSON.parse(JSON.stringify(data));
            newData.sections[sectionIndex].items[itemIndex].title = value;
            setData(newData);
          }}
        />
      </label>
      <label>
        Subtitle
        <input
          type="text"
          name="subtitle"
          defaultValue={subtitle}
          placeholder="Enter the subtitle"
          onChange={(e) => {
            const value = e.target.value;
            const newData = JSON.parse(JSON.stringify(data));
            newData.sections[sectionIndex].items[itemIndex].subtitle = value;
            setData(newData);
          }}
        />
      </label>
      <label>
        Content
        <textarea
          name="content"
          defaultValue={content}
          rows="5"
          placeholder="Enter the content"
          onChange={(e) => {
            const value = e.target.value;
            const newData = JSON.parse(JSON.stringify(data));
            newData.sections[sectionIndex].items[itemIndex].content = value;
            setData(newData);
          }}
        ></textarea>
      </label>
      <button
        className="close btn"
        type="button"
        title="Close editor"
        aria-label="Close editor"
        onClick={() => setEditing(false)}
      >
        Back
        <i className="fa-solid fa-fw fa-chevron-right"></i>
      </button>
    </form>
  );
}
