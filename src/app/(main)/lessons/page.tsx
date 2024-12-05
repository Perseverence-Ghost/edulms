import { Calculator, HeartHandshake, Microscope } from "lucide-react";
import { LessonsCard } from "../_components/LessonsCard";

const lessensCategory = [
  {
    name: "Math",
    icons: Calculator,
  },
  {
    name: "Science",
    icons: Microscope,
  },
  {
    name: "Health",
    icons: HeartHandshake,
  },
];

export default function Page() {
  return (
    <section className="flex h-full w-full flex-wrap items-center justify-center gap-3 px-3">
      {lessensCategory.map((lesson, i) => (
        <LessonsCard key={i} lessons={lesson} />
      ))}
    </section>
  );
}
