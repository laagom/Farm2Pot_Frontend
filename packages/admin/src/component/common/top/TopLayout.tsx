import { useState } from "react";
import LanguageComboBox from "../controls/LanguageComboBox";
import styles from "./TopLayout.module.scss";

function TopLayout() {
  const [language, setLanguage] = useState("ko");

  return (
    <div className={styles.topLayout}>
      <div className={styles.topLayout__text}>
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
      </div>
      <div className={styles.topLayout__controls}>
        <button className={styles.topLayout__button}>ShopNow</button>
        <LanguageComboBox
          value={language}
          onChange={(value) => setLanguage(value)}
        />
      </div>
    </div>
  );
}

export default TopLayout;
