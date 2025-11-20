import styles from './Footer.module.scss'; // SCSS 모듈 임포트

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        {/* Left Section */}
        <div className={styles.leftSection}>
          <h3 className={styles.title}>Exclusive</h3>
          <p className={styles.text}>Subscribe</p>
          <p className={styles.text}>Get 10% off your first order</p>
          <div className={styles.subscribeInputWrapper}>
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.emailInput}
            />
            <button className={styles.submitButton}>→</button>
          </div>
        </div>

        {/* Center Section */}
        <div className={styles.centerSection}>
          <h3 className={styles.title}>Account</h3>
          <ul className={styles.list}>
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className={styles.rightSection}>
          <h3 className={styles.title}>Quick Link</h3>
          <ul className={styles.list}>
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Download App Section */}
        <div className={styles.downloadAppSection}>
          <h3 className={styles.title}>Download App</h3>
          <p className={styles.text}>Save $3 with App New User Only</p>
          <div className={styles.appImages}>
            <img src="/images/google-play.png" alt="Google Play" className={styles.appImage} />
            <img src="/images/app-store.png" alt="App Store" className={styles.appImage} />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        © 2025 밥to밥. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
