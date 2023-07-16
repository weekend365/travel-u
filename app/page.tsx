import TravelPlanList from "./components/TravelPlanList";
import TravelWithList from "./components/TravelWithList";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div>I want to travel with U</div>
      <TravelWithList />
      <TravelPlanList />
    </div>
  );
}
