import defaultPhoto from '../../assets/kobayashi.jpg';

export default function Header({ fullname, specialized, photo }) {
  return (
    <header id="header">
      <div className="background"></div>
      <h1 className="fullname">{fullname}</h1>
      <span className="specialized">{specialized}</span>
      <img className="photo" src={photo || defaultPhoto} alt="" />
    </header>
  );
}
