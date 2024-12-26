import React from 'react';

type CustomLinkProps = {
  href: string;
};

const CustomLink: React.FC<CustomLinkProps> = ({ href }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {href}
    </a>
  );
};

export default CustomLink;