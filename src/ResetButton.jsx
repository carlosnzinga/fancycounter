import { ResetIcon } from "@radix-ui/react-icons";

function ResetButton({ setNumber }) {
  return (
    <button
      className="reset-btn"
      onClick={(event) => {
        setNumber(0);
        event.currentTarget.blur();
      }}
    >
      <ResetIcon className="reset-btn-icon" />
    </button>
  );
}

export default ResetButton;
