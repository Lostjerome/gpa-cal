import { useEffect, useState } from "preact/hooks";
import { InputRow } from "./components/inputRow";
import { calculateGPA } from "./utils/calculateGPA";

export function App() {
  const [gpa, setGpa] = useState(0);
  const [rows, setRows] = useState([0, 1, 2]);

  const addRow = () => {
    setRows([...rows, rows.length]);
  };

  const calculateButtonHandler = () => {
    const credits = document.querySelectorAll(".credits");
    const grade = document.querySelectorAll(".grade");
    const creditsArray = [];
    const gradeArray = [];

    credits.forEach((credit) => {
      creditsArray.push(parseFloat(credit.value || 0));
    });
    grade.forEach((grade) => {
      gradeArray.push(parseFloat(grade.value || 0));
    });

    setGpa(calculateGPA(creditsArray, gradeArray));
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener("keyup", (e) => {
      if (e.key === "Enter") calculateButtonHandler();
    });
    return () => {
      window.removeEventListener("keyup", (e) => {
        if (e.key === "Enter") calculateButtonHandler();
      });
    };
  }, []);

  return (
    <div className="flex justify-center">
      <div className="text-center w-full px-5 max-w-[640px] flex flex-col m-3 py-20 bg-gray-200 rounded-2xl">
        <h1 className="text-6xl font-bold mb-16">{gpa || "GPA Cal"}</h1>
        <div className="flex  justify-between bg-gray-300 p-3 rounded-lg">
          <div className="w-[75%] font-bold">
            Course <span className="font-normal text-xs">(Optional)</span>
          </div>
          <div className="w-[25%] font-bold whitespace-nowrap">
            Credits <span className="text-red-500">*</span>
          </div>
          <div className="w-[25%] font-bold whitespace-nowrap">
            Grade <span className="text-red-500">*</span>
          </div>
        </div>
        <div id="tableContainer">
          {rows.map((item) => (
            <InputRow key={item} />
          ))}
        </div>
        <button
          onClick={addRow}
          className="mt-3 border-2 border-dashed hover:bg-blue-100 duration-200 border-blue-500 text-blue-500 active:bg-blue-50 lg:hover:bg-blue-50  rounded-lg py-2 px-3 "
        >
          +
        </button>
        <div className="flex gap-2 mt-8">
          <button
            onClick={() => {
              location.reload();
            }}
            className="w-full border border-solid border-gray-400 text-gray-400 hover:bg-gray-300 duration-200 rounded-full py-2 px-3 "
          >
            Clear
          </button>
          <button
            onClick={calculateButtonHandler}
            className="w-full text-white font-bold bg-blue-500 hover:bg-blue-400 lg:hover:bg-blue-400 shadow-blue-300 shadow-md duration-200 rounded-full py-2 px-3 "
          >
            Calculate
          </button>
        </div>
      </div>
    </div>
  );
}
