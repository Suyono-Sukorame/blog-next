import Heading from "./components/Heading";

export default function Home() {
  return (
    <div className="p-6">
      <Heading>Selamat Datang</Heading>
      <p className="text-gray-600">
        Ini contoh halaman dengan komponen Heading.
      </p>
    </div>
  );
}