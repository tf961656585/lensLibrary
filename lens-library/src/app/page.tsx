import Link from "next/link";
import { getMounts } from "../lib/data";

export default async function Home() {
  const mounts = getMounts();

  return (
    <div className="px-4">
      <h1 className="text-3xl font-bold mb-4 text-primary">卡口列表</h1>
      <ul className="space-y-2 max-h-[60vh] overflow-y-auto scroll-smooth">
        {mounts.map((mount) => (
          <li key={mount} className="p-2 rounded-lg group hover:bg-primary/10 transition-colors">
            <Link
              href={`/mount/${encodeURIComponent(mount)}`}
              className="text-primary group-hover:underline group-hover:text-primary-dark transition-colors duration-200"
            >
              {mount}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
