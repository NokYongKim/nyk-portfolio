// app/about/page.tsx
export default function AboutPage() {
  return (
    <main className="py-4 max-w-3xl">
      <h1 className="text-2xl font-semibold mb-4">About</h1>
      <p className="text-slate-300 mb-3">
        I’m Seongbeen Park, currently studying in California and preparing to
        transfer to UC/UCSD as a Computer Science major.
      </p>
      <p className="text-slate-300 mb-3">
        I like building practical tools that solve everyday learning and
        productivity problems — that’s why I started making Chrome extensions,
        OCR-based apps, and syllabus-to-calendar services.
      </p>
      <p className="text-slate-300 mb-3">
        My long-term goal is to combine academic CS skills with startup
        execution so I can launch products faster and at higher quality.
      </p>
    </main>
  );
}