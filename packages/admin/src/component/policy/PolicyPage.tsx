import styles from "@core/styles/variables.module.scss";
import SiderLayoutWrapper from "../common/sider/SiderLayoutWrapper";

const PolicyPage = () => (
  <div className={styles.adminLayout}>
    <SiderLayoutWrapper>
      <h1>Admin Policy Page</h1>
      <div>Policy Page Content</div>
    </SiderLayoutWrapper>
  </div>
);

export default PolicyPage;
