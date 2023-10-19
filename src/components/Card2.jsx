import PropTypes from "prop-types";
const Card2 = ({ img2, subTitle, title2, type2 }) => {
  return (
    <div className={`card-container2 ${type2}`}>
      <div id="img-container">
        <img className="img-container" src={`/${img2}.png`}></img>
      </div>
      <div className="subtitle-container">
        <span>{subTitle}</span>
      </div>
      <div className="title2-container">
        <span>{title2}</span>
      </div>
    </div>
  );
};

export default Card2;

Card2.propTypes = {
  img2: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  type2: PropTypes.string.isRequired,
};
