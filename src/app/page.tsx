import FileReader from "./components/FileReader";
import { Header } from "./components/Header";
import { InstallSurfaceTagsContent } from "./components/InstallSurfaceTagsContent/InstallSurfaceTagsContent";
import { TestSurfaceTagsContent } from "./components/TestSurfaceTagsContent/TestSurfaceTagsContent";

export default function HomePage() {
  return (
    <main className="flex p-10">
      <div className="relative w-full overflow-hidden bg-white">
        <div className="relative flex flex-col items-start gap-9 bg-transparent">
          <Header />
          <FileReader component={InstallSurfaceTagsContent} />
          <TestSurfaceTagsContent />
        </div>
      </div>
    </main>
  );
}
