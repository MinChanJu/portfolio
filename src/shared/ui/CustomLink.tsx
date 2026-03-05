interface CustomLinkProps {
  href: string;
}

const CustomLink = ({ href }: CustomLinkProps) => {
  return (
    <a className="break-all text-blue-500 hover:text-blue-700" href={href} target="_blank" rel="noopener noreferrer">
      {href}
    </a>
  );
};

export default CustomLink;
