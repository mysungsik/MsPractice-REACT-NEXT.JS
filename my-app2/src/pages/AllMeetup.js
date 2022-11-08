import MeetupList from "../components/meetups/MeetupList";
import { useEffect, useState } from "react";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetupDatas, setLoadedMeetupDatas] = useState([]);

  useEffect(() => {
    fetch("https://fir-project-fabc9-default-rtdb.firebaseio.com/meetup.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetupDatas = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetupDatas.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetupDatas(meetupDatas);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>isLoading...</p>
      </section>
    );
  }

  return (
    <div>
      <div>AllMeetupsPage</div>
      <div>
        <MeetupList meetups={loadedMeetupDatas} />
      </div>
    </div>
  );
}

export default AllMeetupsPage;
