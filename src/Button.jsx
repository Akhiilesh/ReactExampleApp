export default function Button({ setNumber }) {
  return (
    <button
      className="ButtonHere"
      onClick={() => {
        setNumber((prev) => prev + 1);
      }}
    >
      +
    </button>
  );
}
