import type React from "react";
import type { School } from "../types";

interface TimelineProps {
    school: School[];
}

const Timeline : React.FC<TimelineProps> = ({school}) => {

  return (
    <div className="relative pl-6">
      <div className="absolute left-2 top-0 h-full w-[2px] bg-emerald-400/30"></div>

      {school.map((school, index) => (
        <div key={index} className="mb-10 relative">
          <div className="absolute mt-1 -left-[2px] w-3 h-3 bg-emerald-400 rounded-full"></div>

          <div className="ml-6">
            <p className="text-sm text-emerald-400">{school.date}</p>
            <h3 className="text-lg font-semibold text-white">{school.title}</h3>
            <i className="text-[#94A3B8] text-sm">{school.name} - {school.localisation}</i>
            <ul className="list-disc ml-4 space-y-1">
                {school.description?.map((description, index) => (
                    <li className="text-[#94A3B8]" key={index}>{description}</li>
                ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;