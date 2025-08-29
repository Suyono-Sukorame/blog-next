import Heading from "@/app/components/Heading";
import Link from "next/link";
import Image from "next/image";

export default function LatihanPage() {
  return (
    <>
      <Heading>Halaman Blog</Heading>
      <p>List of posts</p>
      <ul className="mb-6 list-disc pl-5 text-blue-600">
        <li>
          <Link href="/blog/judul-berita" prefetch={false}>
            Judul Berita
          </Link>
        </li>
        <li>
          <Link href="/blog/belajar-next" prefetch={false}>
            Belajar Next JS
          </Link>
        </li>
        <li>
          <Link href="/blog/latihan-route-next" prefetch={false}>
            Latihan Route Next JS
          </Link>
        </li>
      </ul>

      <div className="flex flex-wrap gap-4">
        {/* Image 1 */}
        <div className="mb-4 w-full sm:w-1/2 md:w-1/3">
          <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition">
            <Image
              src="/images/image-1.jpg"
              alt="Image 1"
              width={400}
              height={250}
              className="h-auto w-full object-cover"
            />
            <div className="p-3">
              <h2 className="text-lg font-semibold">Pemandangan Kota Modern</h2>
              <p className="text-xs text-gray-500 mb-1">
                Published by <span className="font-medium">Admin</span> • 30 Agustus 2025
              </p>
              <p className="text-sm text-gray-600">
                Gambar ini memperlihatkan suasana perkotaan yang modern dengan gedung-gedung
                tinggi yang menjulang ke langit. Lampu kota berkilauan memberikan nuansa
                kehidupan yang sibuk, namun juga indah dipandang. Jalanan yang ramai, arsitektur
                yang megah, dan langit senja menciptakan harmoni antara aktivitas manusia dan
                keindahan visual kota besar.
              </p>
            </div>
          </div>
        </div>

        {/* Image 2 */}
        <div className="mb-4 w-full sm:w-1/2 md:w-1/3">
          <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition">
            <Image
              src="/images/image-2.jpg"
              alt="Image 2"
              width={400}
              height={250}
              className="h-auto w-full object-cover"
            />
            <div className="p-3">
              <h2 className="text-lg font-semibold">Suasana Kota di Malam Hari</h2>
              <p className="text-xs text-gray-500 mb-1">
                Published by <span className="font-medium">Admin</span> • 30 Agustus 2025
              </p>
              <p className="text-sm text-gray-600">
                Kota ini tampak hidup di malam hari dengan cahaya lampu jalan, kendaraan, dan 
                gedung pencakar langit yang berkilauan. Aktivitas warganya tak berhenti, 
                mencerminkan dinamika kehidupan urban. Cahaya neon menambah suasana semarak 
                yang menawan, menciptakan energi malam yang sulit ditemukan di tempat lain.
              </p>
            </div>
          </div>
        </div>

        {/* Image 3 */}
        <div className="mb-4 w-full sm:w-1/2 md:w-1/3">
          <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition">
            <Image
              src="/images/image-3.jpg"
              alt="Image 3"
              width={400}
              height={250}
              className="h-auto w-full object-cover"
            />
            <div className="p-3">
              <h2 className="text-lg font-semibold">Jalan Raya di Tengah Kota</h2>
              <p className="text-xs text-gray-500 mb-1">
                Published by <span className="font-medium">Admin</span> • 30 Agustus 2025
              </p>
              <p className="text-sm text-gray-600">
                Jalan raya yang membelah pusat kota ini menunjukkan betapa sibuknya aktivitas 
                transportasi setiap harinya. Kendaraan hilir mudik, pejalan kaki melintas, dan 
                gedung tinggi di sekitarnya menambah nuansa metropolitan. Pemandangan ini menjadi 
                simbol nyata perkembangan ekonomi dan mobilitas perkotaan yang tak pernah tidur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
