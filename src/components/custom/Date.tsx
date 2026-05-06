const DateComponent = ({ date, className }: { date: string; className: string }) => {
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
