const Employee = (props) => {
  return (
    <div className="employee employee-primary ">
      <h3>{props.data.name}</h3>
      <small>{props.data.job}</small>
    </div>
  );
};

export default Employee;
