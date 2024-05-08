export default function ProfileEditor({ data, setData }) {
  const { fullname, specialized } = data;
  const bio = data.sections[0].items[0].content;

  return (
    <form className="profile-editor editor">
      <label>
        Fullname
        <input
          type="text"
          name="fullname"
          defaultValue={fullname}
          placeholder="Enter the fullname"
          onChange={(e) => {
            const value = e.target.value;
            const newData = { ...data, fullname: value };
            setData(newData);
          }}
        />
      </label>
      <label>
        Specialized
        <input
          type="text"
          name="specialized"
          defaultValue={specialized}
          placeholder="Enter the specialized"
          onChange={(e) => {
            const value = e.target.value;
            const newData = { ...data, specialized: value };
            setData(newData);
          }}
        />
      </label>
      <label>
        Photo
        <input
          type="file"
          name="photo"
          accept="image/*"
          onChange={(e) => {
            const reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.addEventListener('load', () => {
              let newPhotoSrc = reader.result;
              const newData = JSON.parse(JSON.stringify(data));
              newData.photo = newPhotoSrc;
              setData(newData);
            });
          }}
        />
      </label>
      <label>
        Bio
        <textarea
          rows={5}
          name="bio"
          defaultValue={bio}
          placeholder="Enter the bio"
          onChange={(e) => {
            const value = e.target.value;
            const newData = JSON.parse(JSON.stringify(data));
            newData.sections[0].items[0].content = value;
            setData(newData);
          }}
        ></textarea>
      </label>
    </form>
  );
}
