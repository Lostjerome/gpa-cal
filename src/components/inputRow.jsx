export function InputRow() {
  return (
    <div className="inputContainer flex gap-2 mt-3">
      <input
        type="text"
        className="course outline-none border-2 border-solid border-gray-300 rounded-lg py-2 px-3 w-[75%]"
      />
      <input
        type="number"
        min={0}
        step={0.5}
        // onChange={addRow}
        className={
          "credits outline-none border-2 border-solid border-gray-300 rounded-lg py-2 px-3 w-[25%]"
        }
      />
      <input
        type="number"
        min={0}
        step={0.5}
        // onChange={addRow}
        className={
          "grade outline-none border-2 border-solid border-gray-300 rounded-lg py-2 px-3 w-[25%]"
        }
      />
    </div>
  );
}
