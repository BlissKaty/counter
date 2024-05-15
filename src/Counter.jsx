export default function Counter({ count, changeColor }) {
  return (
    <div
      className={`mb-10  text-9xl m-2 text-white ${
        changeColor ? "text-blue-400" : "text-red-700"
      } ${count > 4 ? "text-4xl" : ""}`}
    >
      {count > 4 ? "Need to log in" : count}
    </div>
  );
}
