import PropTypes from "prop-types";
const Card = ({ icon, color, title, text, conType, btnType }) => {
  return (
    <div className={`card-container ${conType}`}>
      <button className={`card-icon ${color}`}>{icon}</button>
      <div className="card-title">
        <span>{title}</span>
      </div>
      <div className="card-text">
        <span>{text}</span>
      </div>
      <button className={`card-btn ${btnType}`}>Get Started</button>
    </div>
  );
};

export default Card;

Card.propTypes = {
  icon: PropTypes.element.isRequired,
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  conType: PropTypes.string.isRequired,
  btnType: PropTypes.string.isRequired,
};
