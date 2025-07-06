import Navbar from "@/components/global/Navbar";
import Pattern from "@/components/Pattern";
import LeaderboardPage from "@/views/LeaderboardPage";

export default function Leaderboard() {
  return (
    <div>
      <div style={{ paddingBottom: 90 }}>
        <Navbar />
      </div>

      <Pattern type="light">
        <LeaderboardPage />
      </Pattern>
    </div>
  );
}
