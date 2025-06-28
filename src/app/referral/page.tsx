import Navbar from "@/components/global/Navbar";
import Pattern from "@/components/Pattern";
import ReferralPage from "@/views/ReferralPage/page";

export default function Referral() {
  return (
    <div>
      <div style={{ paddingBottom: 90 }}>
        <Navbar />
      </div>

      <Pattern type="light">
        <ReferralPage />
      </Pattern>
    </div>
  );
}
