// app/projects/page.tsx
const projects = [
  {
    title: "Pause & Note",
    description: "Chrome extension for focus & reflection.",
    stack: ["TypeScript", "Vite", "Chrome API"],
    link: "https://github.com/USERNAME/PauseAndNote",
  },
  {
    title: "Receipt-OCR Expense Book",
    description: "Scan receipts and store expenses locally.",
    stack: ["Flutter", "ML Kit", "SQLite"],
    link: "https://github.com/USERNAME/receipt-ocr",
  },
  {
    title: "Syllabus → Calendar SaaS",
    description: "Convert syllabi into calendar events automatically.",
    stack: ["Next.js", "Supabase", "Drizzle"],
    link: "https://github.com/USERNAME/syllabus-calendar",
  },
];

export default function ProjectsPage() {
  return (
    <main className="py-4">
      <h1 className="text-2xl font-semibold mb-4">Projects</h1>
      <p className="text-slate-300 mb-6">
        Selected work, MVPs, and startup-style experiments.
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <div
            key={p.title}
            className="rounded-lg border border-slate-800 bg-slate-900/40 p-4"
          >
            <h2 className="text-lg font-semibold mb-2">{p.title}</h2>
            <p className="text-sm text-slate-300 mb-3">{p.description}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {p.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs bg-slate-800 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            {p.link && (
              <a
                href={p.link}
                target="_blank"
                className="text-sm text-slate-100 underline underline-offset-4"
              >
                View on GitHub →
              </a>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}