import Link from "next/link";
import { getLenses } from "../../lib/data";
import { motion, AnimatePresence } from 'framer-motion';

export default function SearchPage({ searchParams }: { searchParams: { q?: string | string[] } }) {
  // 处理查询参数，支持数组或单个字符串
  const query = Array.isArray(searchParams.q) ? searchParams.q[0] : searchParams.q || "";
  const allLenses = getLenses();
  // 根据名称或品牌进行模糊过滤（不区分大小写）
  const filteredLenses = query
    ? allLenses.filter(
        (lens) =>
          lens.model.toLowerCase().includes(query.toLowerCase()) ||
          lens.brand.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">搜索镜头</h1>
      <form action="/search" method="get" className="mb-4">
        <input
          type="text"
          name="q"
          placeholder="请输入名称或品牌"
          defaultValue={query}
          className="border p-2 mr-2"
        />
        <motion.button type="submit" className="bg-blue-500 text-white px-4 py-2" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          搜索
        </motion.button>
      </form>
      {query && (
        <div>
          <h2 className="text-xl mb-2">搜索结果：{filteredLenses.length} 条</h2>
          {filteredLenses.length > 0 ? (
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <AnimatePresence mode="popLayout">
                {filteredLenses.map((lens) => (
                  <motion.li key={lens.id} layout initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }} exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border p-4 rounded">
                    <Link href={`/mount/${encodeURIComponent(lens.mount)}/lens/${lens.id}`}>
                      <h3 className="font-bold mb-1">{lens.model}</h3>
                    </Link>
                    <p className="text-sm">品牌: {lens.brand}</p>
                    <p className="text-sm">焦距: {lens.focal_length}</p>
                    <p className="text-sm">光圈: {lens.aperture}</p>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
          ) : (
            <p>未找到匹配镜头</p>
          )}
        </div>
      )}
    </div>
  );
} 