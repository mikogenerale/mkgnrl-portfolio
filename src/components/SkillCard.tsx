import { Skill } from "@/types";
import React from "react";
import Image from "next/image";

type SkillCardProp = {
  skill: Skill;
};

const SkillCard = (prop: SkillCardProp) => {
  return (
    <div
      className="
      bg-secondary shadow-md text-primary rounded-2xl flex flex-col gap-3 items-center justify-center p-8
      transition duration-300 cursor-pointer hover:-translate-y-1
    ">
      <Image
        src={prop.skill.iconLink}
        width={100}
        height={100}
        alt={prop.skill.name}
        className="w-full"
      />
     <p className="text-nowrap">{prop.skill.name}</p>
    </div>
  );
};

export default SkillCard;
