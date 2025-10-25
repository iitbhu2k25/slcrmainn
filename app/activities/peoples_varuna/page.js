import Image from "next/image";

export default function PeoplesVaruna() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-white py-10 px-6">
      <div className="relative max-w-3xl shadow-lg rounded-lg overflow-hidden">
        <Image
          src="/People's_Varuna.png" // Update with your actual image path
          alt="People's Varuna Event"
          width={800}
          height={600}
          className="w-full h-auto"
          priority
        />
      </div>
    </section>
  );
}
