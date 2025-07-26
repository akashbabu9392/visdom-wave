import Link from 'next/link';

export default function Courses() {
  return (
    <main className="min-h-screen bg-[#e8e8e8] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#00334e] mb-6">Courses</h1>
        <p className="text-xl text-gray-600 mb-8">Our comprehensive course catalog is coming soon!</p>
        <Link 
          href="/"
          className="bg-[#5588a3] hover:bg-[#145374] text-white px-8 py-3 rounded-lg font-semibold transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}