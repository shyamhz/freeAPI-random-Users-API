const DateComponent = ({ date, className }) => {
  return (
    <strong className={className}>
      {new Date(date).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        timeZone: "Asia/Kolkata",
      })}
    </strong>
  );
};

export default DateComponent;
