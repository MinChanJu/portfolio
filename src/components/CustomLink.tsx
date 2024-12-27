import React from 'react'
import './CSS/CustomLink.css'

type CustomLinkProps = {
  href: string
}

const CustomLink: React.FC<CustomLinkProps> = ({ href }) => {
  return (
    <a className='link' href={href} target="_blank" rel="noopener noreferrer">
      {href}
    </a>
  );
};

export default CustomLink;