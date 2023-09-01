import { useState } from "react";

const Newempolyess = (props) => {
  const [name, setName] = useState("");
  const [job, setjob] = useState("devloper");

  const handleNamechange = (e) => {
    setName(e.target.value);
  };

  const handleJobchange = (e) => {
    setjob(e.target.value);
  };

  const newemployee = (e) => {
    e.preventDefault();
    if (!name) {
      alert("add name");
      return;
    }
    const employeee = {
      name,
      job,
    };
    //console.log(employeee);
    props.addNewempolyess(employeee);
    setName("");
    setjob("Developer");
  };

  return (
    <div className="employee__new card">
      <h2>Add New employee</h2>

      <form>
        <div>
          <label htmlFor="Name"> Name:</label>
          <input
            id="Name"
            placeholder="New employee"
            onChange={handleNamechange}
            value={name}
          />
        </div>
        <div>
          <label htmlFor="Jobs"> JOb:</label>
          <select id="Jobs" onChange={handleJobchange} value={job}>
            <option value="Developer">Developer</option>
            <option value=" Designer">Designer</option>
          </select>
        </div>
        <div>
          <button
            type="submit"
            className="btn  btn-primary"
            onClick={newemployee}
          >
            {" "}
            Send{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Newempolyess;
