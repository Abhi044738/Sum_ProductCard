const airConditionerCardStyle = { display: "block" };

export function AirConditioner({ product }) {
  const { name, price, specification, warranty } = product;
  return (
    <div>
      <h1>{name}</h1>
      <p1 style={airConditionerCardStyle}>Price:INR {price} </p1>
      <p1 style={airConditionerCardStyle}>Specification:{specification}</p1>
      <p style={airConditionerCardStyle}>Warranty:{warranty}</p>
    </div>
  );
}
