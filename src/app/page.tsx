import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div><figure className="bg-orange-400 rounded-xl p-8 dark:bg-slate-800"/>
  <img className="w-24 h-24 rounded-full mx-auto" src="/first.pic.jpg.jpg" alt="" width="384" height="512"/>
  <div className="pt-6 space-y-4"/>
    <blockquote>
      <p className="text-lg font-medium">
        “hi i am mazhar from rahim yar khan.by profession i am a teacher. i love teaching.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-50>
         mazhar iqbal 
      </div>
      <div>
        teaching
      </div>
    </figcaption>
  </div>
</figure></div>
    </main>
  );
}
