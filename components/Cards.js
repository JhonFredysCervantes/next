import Card from "./Card";

const Cards = ({ nasaData }) => {
  return (
    <div className="cards">
      {nasaData.map((item) => (
        <Card
          key={item?.data[0]?.nasa_id}
          image={(item?.links)?item?.links[0]?.href: "https://via.placeholder.com/300"}
          title={item?.data[0]?.title}
          description={item?.data[0]?.description_508}
        />
      ))}
    </div>
  );
};

export default Cards;
