import Heading from "@/components/Heading";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white px-6 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <Heading>About Us</Heading>
          <p className="mt-3 text-lg text-gray-600">
            Kenali lebih dekat siapa kami, visi, dan misi yang kami bawa.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Side */}
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Visi Kami
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Menjadi penyedia layanan terbaik dengan menghadirkan inovasi yang
              memberi manfaat bagi masyarakat luas. Kami percaya teknologi dapat
              menjadi jembatan menuju kebaikan.
            </p>
          </div>

          {/* Right Side */}
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Misi Kami
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Menghadirkan solusi yang mudah diakses semua orang.</li>
              <li>Berfokus pada kualitas dan keberlanjutan.</li>
              <li>Membangun komunitas yang peduli dan kolaboratif.</li>
            </ul>
          </div>
        </div>

        {/* Highlight Section */}
        <div className="mt-12 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">
            Bersama Menuju Masa Depan
          </h2>
          <p className="max-w-2xl mx-auto text-lg">
            Kami percaya kolaborasi dan semangat bersama adalah kunci untuk
            menciptakan perubahan yang lebih baik.
          </p>
        </div>
      </div>
    </div>
  );
}
