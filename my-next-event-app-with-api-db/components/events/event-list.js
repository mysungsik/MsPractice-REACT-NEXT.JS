import EventItems from "../../components/events/event-items";
import styles from "./event-list.module.css";

function EventList(props) {
  return (
    <section>
      <ul className={styles.list}>
        {props.eventdatas.map((data) => (
          <EventItems
            key={data.id}
            id={data.id}
            title={data.title}
            image={data.image}
            location={data.location}
            date={data.date}
          />
        ))}
      </ul>
    </section>
  );
}
export default EventList;
