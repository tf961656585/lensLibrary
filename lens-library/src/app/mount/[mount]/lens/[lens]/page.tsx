import Image from "next/image";
import { getLenses } from "../../../../../lib/data";

export default async function Page({ params }: { params: { mount: string; lens: string } }) {
  const { mount: mountParam, lens: lensId } = await params;
  const mountName = decodeURIComponent(mountParam);
  const lens = getLenses().find(
    (l) => l.mount === mountName && l.id === lensId
  );

  if (!lens) {
    return <div>未找到该镜头。</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{lens.model}</h1>
      <div className="mb-4">
        <Image
          src="https://via.placeholder.com/300"
          alt={lens.model}
          width={300}
          height={300}
          priority
          className="rounded"
        />
      </div>
      <ul className="list-disc list-inside space-y-1 text-sm">
        <li>品牌: {lens.brand}</li>
        <li>卡口: {lens.mount}</li>
        <li>焦距: {lens.focal_length}</li>
        <li>光圈: {lens.aperture}</li>
        <li>最小对焦距离: {lens.min_focus_distance}</li>
        <li>滤镜口径: {lens.filter_thread}</li>
        <li>重量: {lens.weight}</li>
        <li>尺寸: {lens.dimensions}</li>
        <li>发布年份: {lens.release_year}</li>
      </ul>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">购买信息</h2>
        <p>
          外部购买链接: {" "}
          <a
            href={lens.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            点击查看
          </a>
        </p>
        <p className="text-sm mt-1">价格参考: 以购买页面为准</p>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const lenses = getLenses();
  return lenses.map((l) => ({ mount: l.mount, lens: l.id }));
} 