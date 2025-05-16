import { getLenses, getMounts } from "../../../lib/data";
import LensListClient from "./LensListClient.tsx";

export default async function Page({ params }: { params: { mount: string } }) {
  const { mount: mountParam } = await params;
  const mountName = decodeURIComponent(mountParam);
  const lenses = getLenses().filter((lens) => lens.mount === mountName);

  return (
    <div className="px-4">
      <h1 className="text-3xl font-bold mb-4 text-primary">{mountName} 镜头列表</h1>
      <LensListClient lenses={lenses} />
    </div>
  );
}

export async function generateStaticParams() {
  const mounts = getMounts();
  return mounts.map((mount) => ({ mount }));
} 