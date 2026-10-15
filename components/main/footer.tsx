import Link from "next/link";
import { FOOTER_DATA, PERSONAL_INFO } from "@/constants";

export const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-20 relative">
      <div className="w-full flex flex-col items-center justify-center m-auto max-w-[1200px]">
        <div className="w-full h-full flex flex-row items-start justify-around flex-wrap gap-8 my-10">
          {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="min-w-[200px] h-auto flex flex-col items-center md:items-start justify-start"
            >
              <h3 className="font-bold text-[16px] text-purple-400 mb-2">{column.title}</h3>
              {column.data.map(({ icon: Icon, name, link }) => (
                <Link
                  key={`${column.title}-${name}`}
                  href={link}
                  target={link.startsWith("http") ? "_blank" : "_self"}
                  rel="noreferrer noopener"
                  className="flex flex-row items-center my-[8px] hover:text-[#b49bff] transition"
                >
                  {Icon && <Icon className="text-gray-300" />}
                  <span className="text-[14px] ml-[8px]">{name}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="mb-[20px] text-[14px] text-center text-gray-400 border-t border-[#7042f844] pt-6 w-full">
          &copy; {PERSONAL_INFO.name} {new Date().getFullYear()} Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
};
