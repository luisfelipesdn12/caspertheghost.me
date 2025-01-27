import Image from "next/image";
import styles from "css/footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerIcon}>
          <Image
            decoding="async"
            loading="lazy"
            src="/icons/icon-1080.png"
            alt="footer"
            width="100"
            height="100"
          />
        </div>

        <p>
          Created by{" "}
          <a href="https://github.com/dev-caspertheghost/caspertheghost.me">CasperTheGhost</a> with
          ❤️, Colors: GitHub dark mode
        </p>

        <div className={styles.footerLinks}>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href={process.env.NEXT_PUBLIC_TWITTER_PROFILE_URL}
          >
            Twitter
          </a>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href={process.env.NEXT_PUBLIC_GITHUB_PROFILE_URL}
          >
            GitHub
          </a>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href={process.env.NEXT_PUBLIC_LINKEDIN_PROFILE_URL}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
