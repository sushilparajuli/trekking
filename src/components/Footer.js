import React from "react"
import styles from "../css/footer.module.css"
import links from "../constants/navLinks"
import socialLinks from "../constants/socialLinks"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.links}>
        {links.map((item, index) => {
          return (
            <Link key={index} to={item.path}>
              {item.text}
            </Link>
          )
        })}
      </nav>
      <div className={styles.icons}>
        {socialLinks.map((item, index) => {
          return (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          )
        })}
      </div>
      <div className={styles.copyright}>
        copyright &copy; backroads travel company {new Date().getFullYear()} All
        rights reserved.
      </div>
    </footer>
  )
}

export default Footer
