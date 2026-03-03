import EventCard from "../components/EventCard";
import ExploreButton from "../components/ExploreButton";
import HomepageTracker from "../components/HomepageTracker";
import { events } from "../lib/constants";
const Page = () => {
  return (
    <section>
      <HomepageTracker />
      <h1 className="text-center">
        The Hub for Every Day <br /> Event You Cant Miss
      </h1>
      <p className="text-center mt-5">
        Hackathons, Meetups, and Conferneces, All in One Place
      </p>
      <ExploreButton />

      <div id="#events" className="mt-20 space-y-7 mx-7">
        <h3>Featured Events</h3>
        <ul className="events">
          {events.map((event) => (
            <li key={event.slug}>
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Page;
