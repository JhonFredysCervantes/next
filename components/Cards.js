import Card from "./Card";

const Cards = ({ nasaData }) => {
  return (
    <div className="cards">
      {nasaData.map((item) => (
        <Card
          image={item.links[0].href}
          title={item.data[0].title}
          description={item.data[0].description_508}
        />
      ))}
    </div>
  );
};

export default Cards;
