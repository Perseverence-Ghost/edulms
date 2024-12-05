import React from "react";

import { MagicCard } from "~/components/ui/magic-card";
import { LucideIcon } from "lucide-react";

type LessonsCardProps = {
  name: string;
  icons: LucideIcon;
};

export function LessonsCard({ lessons }: { lessons: LessonsCardProps }) {
  console.log(lessons);
  const theme = "light";

  return (
    <div
      className={
        "flex h-[500px] w-[200px] flex-col gap-4 lg:h-[250px] lg:flex-row"
      }
    >
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center whitespace-nowrap text-4xl shadow-2xl"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        <div className="flex flex-col items-center justify-center gap-2">
          {React.createElement(lessons.icons)}
          <h1 className="text-xl font-bold">{lessons.name}</h1>
        </div>
      </MagicCard>
    </div>
  );
}
