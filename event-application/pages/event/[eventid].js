import { findEvent } from "../../helper/api-util";
import { getFeatureEvent } from "../../helper/api-util";

import EventLogistics from "../../components/event-detail/event-logistics";
import EventSummary from "../../components/event-detail/event-summary";
import EventContent from "../../components/event-detail/event-content";

import { Fragment } from "react";

function EventDetailPage(props) {
  const eventById = props.eventById;

  if (!eventById) {
    return <p> no Event Found!</p>;
  }
  return (
    <Fragment>
      <EventSummary title={eventById.title} />
      <EventLogistics
        date={eventById.date}
        address={eventById.location}
        image={eventById.image}
        imageAlt={eventById.title}
      />
      <EventContent>
        <p> {eventById.description}</p>
      </EventContent>
    </Fragment>
  );
}
export default EventDetailPage;

export async function getStaticProps(context) {
  const { params } = context;
  const inputId = params.eventid;

  const foundEvent = await findEvent(inputId);

  return {
    props: {
      eventById: foundEvent,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const allEvents = await getFeatureEvent();

  const prePath = allEvents.map((event) => ({ params: { eventid: event.id } }));

  // paths : [ {params : {동적파일name : "들어올수있는URL"}}, {params : {동적파일name2 : "들어올수있는URL2"}} ...]
  return {
    paths: prePath,
    fallback: true,
  };
}
