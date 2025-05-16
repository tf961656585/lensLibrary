export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-primary">镜头图书馆</a>
        <div className="space-x-6 hidden sm:flex">
          <a href="/" className="text-gray-600 hover:text-primary">首页</a>
          <a href="/search" className="text-gray-600 hover:text-primary">搜索</a>
          <a href="/about" className="text-gray-600 hover:text-primary">关于</a>
        </div>
      </div>
    </nav>
  );
} 