import React from 'react'
import styles from "../assets/css/CustomLink.module.css"

type CustomLinkProps = {
  href: string
}

const CustomLink: React.FC<CustomLinkProps> = ({ href }) => {
  return (
    <a className={styles.link + ' subinfo'} href={href} target="_blank" rel="noopener noreferrer">
      {href}
    </a>
  );
};

export default CustomLink;