
const Card = ({ image, title, description }) => {
  return (
    <div className="card-content">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
