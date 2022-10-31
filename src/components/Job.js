const Job = (props) => {
  return (
    <div className={props.className}>
      <div className="box-ratio">
        <h2 className="job-title">{props.title}</h2>
        <p className="info">
          {props.contractType} - {props.country} - {props.city}
        </p>
      </div>
    </div>
  );
};
export default Job;
