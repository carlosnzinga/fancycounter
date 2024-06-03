import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";

export default function CountButton({ type, setNumber, locked }) {
  //his function to limit the decriss
  const handleClick = (event) => {
    setNumber((prev) => {
      if (type === "minus") {
        const newNumber = prev - 1;
        if (newNumber < 0) {
          return 0;
        }
        return newNumber;
      } else {
        const newNumber = prev + 1;
        if (newNumber > 5) {
          return 5;
        }
        return newNumber;
      }
    });
    event.currentTarget.blur();
  };

  return (
    <button disabled={locked} className="count-btn" onClick={handleClick}>
      {type === "minus" ? (
        <MinusIcon className="count-btn-icon" />
      ) : (
        <PlusIcon className="count-btn-icon" />
      )}
    </button>
  );
}

// MY solution !!!!

// import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";

// export default function CountButton({ type, setNumber }) {
//   const handleClick = () => {
//     type === "minus"
//       ? setNumber((prev) => prev - 1)
//       : setNumber((prev) => prev + 1);
//   };
//   return (
//     <button className="count-btn" onClick={handleClick}>
//       {type === "minus" ? (
//         <MinusIcon className="count-btn-icon" />
//       ) : (
//         <PlusIcon className="count-btn-icon" />
//       )}
//     </button>
//   );
// }
