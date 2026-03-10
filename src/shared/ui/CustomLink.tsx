import { ReactNode } from "react";

interface CustomLinkProps {
  href: string;
  className?: string;
  children?: ReactNode;
}

const CustomLink = ({ href, className, children }: CustomLinkProps) => {
  return (
    <a
      className={className || `break-all text-blue-600 hover:text-blue-800`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children || href}
    </a>
  );
};

export default CustomLink;
