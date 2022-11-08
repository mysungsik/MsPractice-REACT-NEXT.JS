import styles from "./event-items.module.css";
import Button from "../ui/button";

import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import DateIcon from "../icons/date-icon";

function EventItems(props) {
  const { image, title, date, location, id } = props;

  const newDate = new Date(date).toLocaleDateString("ko-KR");
  const newLocation = location.replace(",", "\n");
  const exploreLink = `/event/${id}`;

  return (
    <li className={styles.item}>
      <img src={"/" + image} alt="imageName" className={styles.img} />
      <div>
        <div className={styles.content}>
          <h2> {title}</h2>
          <div>
            <span className={styles.icon}>
              <DateIcon />
            </span>
            <time className={styles.time}> {newDate} </time>
          </div>
          <div className={styles.address}>
            <span>
              <AddressIcon />
            </span>
            <address> {newLocation} </address>
          </div>
        </div>
      </div>
      <div className={styles.actions}>
        <Button link={exploreLink}>
          <span className={styles.icon}>
            <ArrowRightIcon />
          </span>
          Explore Events
        </Button>
      </div>
    </li>
  );
}
export default EventItems;
