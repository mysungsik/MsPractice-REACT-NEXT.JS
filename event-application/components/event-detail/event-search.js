import Button from "../ui/button";
import styles from "./event-search.module.css";

import { useRef } from "react";

const years = [];
const month = [
  { month: "Jan", key: 1 },
  { month: "Feb", key: 2 },
  { month: "Mar", key: 3 },
  { month: "Apr", key: 4 },
  { month: "May", key: 5 },
  { month: "Jun", key: 6 },
  { month: "Jul", key: 7 },
  { month: "Aug", key: 8 },
  { month: "Sep", key: 9 },
  { month: "Oct", key: 10 },
  { month: "Nov", key: 11 },
  { month: "Dec", key: 12 },
];

for (let i = 2019; i < 2023; i++) {
  years.push({ year: i });
}

function EventsSearch(props) {
  const yearRef = useRef();
  const monthRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const selectedYear = yearRef.current.value;
    const selectedMonth = monthRef.current.value;

    props.onSearch(selectedYear, selectedMonth);
  }

  return (
    <form className={styles.form}>
      <div className={styles.controls}>
        <div className={styles.control}>
          <label htmlFor="year"> YEAR</label>
          <select id="year" ref={yearRef}>
            {years.map((date) => (
              <option value={date.year} key={date.year}>
                {date.year}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.control}>
          <label htmlFor="month">MONTH</label>
          <select ref={monthRef}>
            {month.map((date) => (
              <option value={date.key} key={date.key}>
                {date.month}
              </option>
            ))}
          </select>
        </div>
        <div>
          <Button onClick={submitHandler}>버튼</Button>
        </div>
      </div>
    </form>
  );
}
export default EventsSearch;
