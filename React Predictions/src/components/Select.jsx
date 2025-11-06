import days from "../days.json";

function Select({ value, onChange, disabled }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      aria-label="Choose day"
    >
      <option value="" disabled>
        Choose day
      </option>
      {days.map((d, i) => {
        return (
          <option key={d} value={i}>
            {d}
          </option>
        );
      })}
    </select>
  );
}
export default Select;
