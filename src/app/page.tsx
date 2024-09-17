import { Header } from "./components/Header";
import { SetupDropdown } from "./components/SetupDropdown/SetupDropdown";

export default function HomePage() {
  return (
    <main className="flex">
      <div className="relative overflow-hidden bg-white">
        <div className="relative flex flex-col items-start gap-9 bg-transparent">
          <Header />
          <SetupDropdown
            title="Install Surface Tag on your site."
            subtitle="Enable tracking and analytics."
          />
          <SetupDropdown
            title="Test Surface Tag Events."
            subtitle="Test if the Surface Tag is properly emitting events."
          />
        </div>
      </div>
    </main>
  );
}
