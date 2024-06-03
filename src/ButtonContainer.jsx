import CountButton from "./CountButton";

export default function ButtonContainer({ locked, setNumber }) {
  return (
    <div className="button-container">
      <CountButton type="minus" setNumber={setNumber} locked={locked} />
      <CountButton type="plus" setNumber={setNumber} locked={locked} />
    </div>
  );
}
