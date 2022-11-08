import { useRouter } from "next/router";
import { Fragment } from "react";
import { useState, useEffect } from "react";
import useSWR from "swr";

import Button from "../../components/ui/button";

import EventList from "../../components/events/event-list";
import ErrorAlert from "../../components/ui/error-alert";

function DateFilter() {
  const [filteredEvent, setFilteredEvent] = useState();
  const eventdate = useRouter();
  const dateFilter = eventdate.query.date;

  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR(
    "https://next-course-ca17a-default-rtdb.firebaseio.com/event.json",
    fetcher
  );

  useEffect(() => {
    if (data) {
      const reformData = [];

      for (const key in data) {
        reformData.push({
          id: key,
          ...data[key],
        });
      }

      setFilteredEvent(reformData);
    }
  }, [data]);

  if (!filteredEvent) {
    return (
      <Fragment>
        <p> Invalid Filter</p>;<Button link="/"> go back to event </Button>
      </Fragment>
    );
  }

  const [inputYear, inputMonth] = dateFilter;

  const NumInputYear = +inputYear;
  const NumInputMonth = +inputMonth;

  // 넣은 값이 이상할 경우 validation
  if (
    isNaN(NumInputYear) ||
    isNaN(NumInputMonth) ||
    NumInputYear == "" ||
    NumInputMonth == "" ||
    NumInputYear > 2030 ||
    NumInputYear < 2010 ||
    NumInputMonth < 1 ||
    NumInputMonth > 12
  ) {
    return (
      <Fragment>
        <p> Invalid Filter</p>;<Button link="/"> go back to event </Button>
      </Fragment>
    );
  }

  const filteredData = filteredEvent.filter(
    (item) =>
      new Date(item.date).getFullYear() === NumInputYear &&
      new Date(item.date).getMonth() === NumInputMonth - 1
  );

  if (!filteredData || filteredData.length == 0) {
    return (
      <Fragment>
        <ErrorAlert>you have no result</ErrorAlert>
        <Button link="/"> go back to event </Button>
      </Fragment>
    );
  }

  return (
    <div>
      <EventList eventdatas={filteredData} />
    </div>
  );
}
export default DateFilter;
