import { Map, MapControls } from "@/components/ui/map";
import { Card } from "@/components/ui/card";

export function MyMap() {
  return (
    <Card className="h-[260px] w-full overflow-hidden p-0 sm:h-[320px] lg:h-[420px]">
      <Map center={[-74.006, 40.7128]} zoom={11}>
        <MapControls />
      </Map>
    </Card>
  );
}

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full items-center justify-center px-4 py-6 sm:px-6 lg:px-10">
      <section className="w-full max-w-6xl">
        <MyMap />
      </section>
    </main>
  );
}
