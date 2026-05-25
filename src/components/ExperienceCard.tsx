"use client";

import { Experience } from "@/types";
import { formatDateTimeline } from "@/utils/formatDateTimeline";
import Link from "next/link";

type ExperienceCardProps = {
  data: Experience;
};

const ExperienceCard = ({ data }: ExperienceCardProps) => {
  return (
    <article className="break-inside-avoid mb-8 group">
      <div className="bg-secondary/90 backdrop-blur-sm border border-zinc-200 rounded-2xl p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-zinc-300">
        
        <p className="text-xs font-semibold tracking-wide text-zinc-500 uppercase mb-5">
          {formatDateTimeline(data.start, data.end)}
        </p>

        <div className="flex flex-col gap-6">
          
          <div className="space-y-1">
            <h2 className="text-lg font-semibold leading-snug text-zinc-900">
              {data.title}
            </h2>

            <Link
              href={data.link}
              target="_blank"
              className="w-fit text-sm italic text-zinc-600 underline-offset-4 transition-colors hover:text-zinc-900 hover:underline"
            >
              {data.company}
            </Link>

            <p className="text-sm text-zinc-500">
              {data.location}
            </p>
          </div>

          <p className="text-sm leading-7 text-zinc-700">
            {data.description}
          </p>

          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-5">
            <h3 className="text-sm font-semibold text-zinc-900 mb-3">
              Key Features
            </h3>

            <ul className="space-y-2 pl-5 list-disc marker:text-zinc-400">
              {data.key_features.map((feature, index) => (
                <li
                  key={index}
                  className="text-sm leading-6 text-zinc-700"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ExperienceCard;