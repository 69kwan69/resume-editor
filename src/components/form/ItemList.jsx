export default function ItemList({
  sectionIndex,
  data,
  setData,
  selectItemIndex,
  setEditing,
}) {
  const itemList = data.sections[sectionIndex].items;

  return (
    <>
      <ul className="item-list">
        {itemList.map((item, index) => (
          <li key={index} className="item">
            <h3>{item.title}</h3>
            <button
              className="edit btn"
              title="Edit item"
              onClick={() => {
                selectItemIndex(index);
                setEditing(true);
              }}
            >
              <i className="fa-solid fa-fw fa-pen"></i>
            </button>
            <button
              className="remove btn"
              title="Remove item"
              onClick={() => {
                const newData = JSON.parse(JSON.stringify(data));
                newData.sections[sectionIndex].items.splice(index, 1);
                setData(newData);
              }}
            >
              <i className="fa-solid fa-fw fa-trash"></i>
            </button>
          </li>
        ))}
        <button
          className="new-item btn"
          onClick={() => {
            if (itemList.length >= 14) return;
            const newItem = {
              title: 'New item',
              subtitle: '',
              content: '',
            };
            const newData = JSON.parse(JSON.stringify(data));
            newData.sections[sectionIndex].items.push(newItem);
            selectItemIndex(itemList.length - 1);
            setEditing(true);
            setData(newData);
          }}
        >
          <i className="fa-solid fa-fw fa-plus"></i>
          &nbsp;
          {itemList.length <= 5
            ? 'New Item'
            : itemList.length <= 6
            ? "Hey, isn't it a bit too many?"
            : itemList.length <= 7
            ? "I mean, aren't these enough?"
            : itemList.length <= 8
            ? 'I think you should stop, ya know'
            : itemList.length <= 9
            ? "Having too many doesn't get you anywhere."
            : itemList.length <= 10
            ? 'Are you being serious?'
            : itemList.length <= 11
            ? 'Oh, you are testing ME?'
            : itemList.length <= 12
            ? 'We should stop this nonsense.'
            : itemList.length <= 13
            ? 'Right, im gonna stop you.'
            : 'Yea, try me.'}
        </button>
      </ul>
    </>
  );
}
