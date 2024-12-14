import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center bg-primary-300">
      <section className="w-64 bg-white p-3 rounded-2xl flex flex-col gap-4 shadow-custom">
        <div>
          <Image
            src={"/images/image-qr-code.png"}
            alt="QR code"
            width={200}
            height={200}
            className="w-auto h-auto rounded-xl"
          />
        </div>
        <div className="w-full ">
          <h1 className="font-bold text-lg text-center text-slate-900">
            Improve your front-end skills by building projects
          </h1>
        </div>
        <div className="w-full px-2 pb-4">
          <p className="text-center text-sm text-slate-500">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </section>
    </main>
  );
}
