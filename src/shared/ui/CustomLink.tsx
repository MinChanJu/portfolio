interface CustomLinkProps {
  href: string;
}

const CustomLink = ({ href }: CustomLinkProps) => {
  return (
    <a className="break-all text-blue-600 hover:text-blue-800" href={href} target="_blank" rel="noopener noreferrer">
      {href}
    </a>
  );
};

export default CustomLink;
