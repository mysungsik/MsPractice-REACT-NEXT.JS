import EventList from "../components/events/event-list";
import EventsSearch from "../components/event-detail/event-search";
import { useRouter } from "next/router";
import { getAllEvents } from "../helper/api-util";
import ResisterEmail from "../components/input/event-signup";
import Head from "next/head";

function HomePage(props) {
  const { allEvents } = props;
  const router = useRouter();

  function searchEventHandler(year, month) {
    const fullPath = `/event/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <div>
      <Head>
        <title> eventHomePage </title>
        <meta name="description" content="Find event allow you to evolve" />
      </Head>
      <ResisterEmail />
      <EventsSearch onSearch={searchEventHandler} />
      <EventList eventdatas={allEvents} />
    </div>
  );
}

export async function getStaticProps() {
  const reformData = await getAllEvents();
  return {
    props: {
      allEvents: reformData,
    },
    revalidate: 1800,
  };
}
export default HomePage;
