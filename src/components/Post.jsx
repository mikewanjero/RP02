const names = ["Michael", "John"];

export default function Post() {
  const chosenName = Math.random() > 0.5 ? names[0] : names[1];

  return (
    <div>
      <h2>{chosenName}</h2>
      <p>Is on React Web now!</p>
    </div>
  );
}
