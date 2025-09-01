import Heading from "@/components/Heading";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-3xl w-full bg-white shadow-xl rounded-2xl p-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <Heading>Halaman Contact</Heading>
          <p className="text-gray-600 mt-2 text-lg">Hubungi Kami Segera</p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Phone */}
          <div className="flex flex-col items-center bg-blue-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <PhoneIcon className="h-10 w-10 text-blue-600 mb-4" />
            <h3 className="font-semibold text-lg">Telepon</h3>
            <p className="text-gray-600">+62 812 3456 7890</p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center bg-blue-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <EnvelopeIcon className="h-10 w-10 text-blue-600 mb-4" />
            <h3 className="font-semibold text-lg">Email</h3>
            <p className="text-gray-600">info@example.com</p>
          </div>

          {/* Address */}
          <div className="flex flex-col items-center bg-blue-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <MapPinIcon className="h-10 w-10 text-blue-600 mb-4" />
            <h3 className="font-semibold text-lg">Alamat</h3>
            <p className="text-gray-600 text-center">
              Jl. Merdeka No. 123 <br /> Jakarta, Indonesia
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
