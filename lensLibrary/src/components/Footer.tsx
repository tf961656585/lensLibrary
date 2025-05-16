export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-12">
      <div className="container mx-auto px-4 py-6 text-center text-gray-600">
        © {new Date().getFullYear()} 镜头图书馆. 保留所有权利.
      </div>
    </footer>
  );
} 