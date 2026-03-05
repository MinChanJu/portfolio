import React from "react";

interface CustomLinkProps {
  href: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ href }) => {
  return (
    <a
      className="text-lg font-normal break-all text-blue-500 hover:text-blue-700"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {href}
    </a>
  );
};

export default CustomLink;
