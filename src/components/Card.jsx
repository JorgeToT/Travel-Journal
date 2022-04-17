import icon from "../assets/location-icon.png";

function Card(props) {
  return (
    <div className="card">
      <img
        src={require("../assets/" + props.img)}
        alt=""
        className="card--img"
      />
      <div className="card--info">
        <p className="card--header">
          <img src={icon} alt="" />
          <span className="card--country">{props.country}</span>
          <a href={props.link} className="card--link">
            View on Google Maps
          </a>
        </p>
        <p className="card--title">{props.title}</p>
        <p className="card--dates">
          {props.dates.start} - {props.dates.end}
        </p>
        <p className="card--description">{props.description}</p>
      </div>
    </div>
  );
}

export default Card;