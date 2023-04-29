const cardStyle = { fontSize: "20px" };

// const firstNumber = 5;
// const secondNumber = 4;

export function SumCard({ firstNumber, secondNumber }) {
  return (
    <div>
      <h1>Sum Of Two Numbers</h1>
      <div>
        <p style={cardStyle}>First number: {firstNumber}</p>
        <p style={cardStyle}>Second number: {secondNumber}</p>
        <p style={cardStyle}>Sum of numbers is: {firstNumber + secondNumber}</p>
      </div>
    </div>
  );
}
