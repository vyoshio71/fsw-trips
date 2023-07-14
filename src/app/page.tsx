import TripSearch from "./components/TripSearch";
import QuickSearch from "./components/QuickSearch";
import RecommendedTrips from "./components/RecommendedTrips";

export default function Home() {
  return (
    <div className="">
      <TripSearch />
      <QuickSearch />
      <RecommendedTrips />
    </div>
  );
}
