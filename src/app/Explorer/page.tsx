import Navbar from "@/components/global/Navbar";
import Pattern from "@/components/Pattern";
import ExplorerPage from "@/views/ExplorerPage";

export default function Home() {
  return (
    <div>
      <div style={{paddingBottom: 90}}>
      <Navbar />
      </div>

      <Pattern type="light">
        <ExplorerPage />
      </Pattern>
    </div>
  );
}
