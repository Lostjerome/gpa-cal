import { useEffect, useState } from "preact/hooks";

const calculateGPA = (credits, grade) => {
  const totalCredits = credits.reduce((a, b) => a + b, 0);
  let totalGrade = 0;

  for (let i = 0; i < credits.length; i++) {
    if (credits[i] === 0) continue;
    totalGrade += credits[i] * grade[i];
  }

  return (totalGrade / totalCredits).toFixed(2);
};

export function App() {
  const [gpa, setGpa] = useState(0);
  const [rows, setRows] = useState([0, 1, 2]);

  const addRow = () => {
    setRows([...rows, rows.length]);

    // const table = document.getElementById("tableContainer");
    // const lastRow = table.lastElementChild;
    // const creditsInput = lastRow.children[1];
    // const gradeInput = lastRow.children[2];

    // if (creditsInput.value && gradeInput.value) {
    // }
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
    window.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        calculateButtonHandler();
      }
    });
    return () => {
      window.removeEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          calculateButtonHandler();
        }
      });
    };
  }, []);

  return (
    <>
      <div className="text-center w-full px-5 max-w-[640px] flex flex-col m-auto py-20">
        <div>
          {/* <p>Your GPA is</p> */}
          <h1 className="text-6xl font-bold mb-16">{gpa || "GPA Cal"}</h1>
        </div>
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
          {rows.map((item, index) => (
            <InputRow key={index} />
          ))}
        </div>
        <button
          onClick={addRow}
          className="mt-3 border-2 border-dashed border-blue-500 text-blue-500 hover:bg-blue-50 duration-200 rounded-lg py-2 px-3 "
        >
          +
        </button>
        <div className="flex gap-2 mt-8">
          <button
            onClick={() => {
              location.reload();
            }}
            className="w-full border-2 border-solid border-gray-300 rounded-full py-2 px-3 "
          >
            Clear
          </button>
          <button
            onClick={calculateButtonHandler}
            className="w-full text-white font-bold bg-blue-500 hover:bg-blue-400 duration-200 rounded-full py-2 px-3 "
          >
            Calculate
          </button>
        </div>
      </div>
    </>
  );
}

function InputRow() {
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
