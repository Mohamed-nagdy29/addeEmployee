import Newempolyess from "./Newempolyess";
import Employee from "./employee";
import { useState } from "react";
const initialdata = [
  { id: 1, name: "Sara Ahmed", job: "designer", active: true },
  { id: 2, name: "Ali Ahmed", job: "developer", active: false },
  { id: 3, name: "Salma Ali", job: "developer", active: false },
  { id: 4, name: "Ahmed Gamal", job: "designer", active: true },
];

export default function Empolyess() {
  const [data, setdata] = useState(initialdata);
  const [show, setshow] = useState("false");

  /* const newname = () => {
    const newdata = [...data];
    newdata[0].name = "mohamed";
    setdata(newdata);
  };*/
  const handlenewemployee = (newe) => {
    setdata((state) => {
      const newdata = [newe, ...state];
      return newdata;
    });
  };
  const toglle = () => {
    setshow(!show);
  };

  return (
    <div className="employees">
      {show ? <Newempolyess addNewempolyess={handlenewemployee} /> : null}

      <div className="center">
        <button className="btn " onClick={toglle}>
          Add New Employee
        </button>
      </div>
      <div className="employees__list card">
        {data.map((Empolyes) => {
          return <Employee data={Empolyes} />;
        })}
      </div>
    </div>
  );
}
