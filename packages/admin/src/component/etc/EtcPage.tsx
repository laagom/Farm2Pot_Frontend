import styles from "@core/styles/variables.module.scss";
import SiderLayoutWrapper from "../common/sider/SiderLayoutWrapper";

const EtcPage = () => (
  <div className={styles.adminLayout}>
    <SiderLayoutWrapper>
      <h1>Admin Etc Page</h1>
      <div>Etc Page Content</div>
    </SiderLayoutWrapper>
  </div>
);

export default EtcPage;
