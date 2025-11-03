// app/page.tsx
export default function Home() {
  return (
    <main className="min-h-[70vh] flex flex-col gap-6 justify-center">
      <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
        Seongbeen Park
      </p>
      <h1 className="text-4xl md:text-5xl font-bold text-slate-100">
        CS student & builder.
      </h1>
      <p className="text-slate-300 max-w-2xl">
        Building products for learning, focus, and productivity. Preparing to
        transfer to UC/UCSD while developing startup-style personal projects.
      </p>
      <div className="flex gap-3">
        <a
          href="/projects"
          className="px-4 py-2 rounded-md bg-slate-100 text-slate-900 text-sm font-semibold"
        >
          View Projects
        </a>
        <a
          href="/about"
          className="px-4 py-2 rounded-md border border-slate-500 text-sm"
        >
          About me
        </a>
      </div>
    </main>
  );
}