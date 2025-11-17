import styles from "@core/styles/variables.module.scss";
import SiderLayoutWrapper from "../common/sider/SiderLayoutWrapper";

const BoxPage = () => (
  <div className={styles.adminLayout}>
    <SiderLayoutWrapper>
      <h1>Admin Box Page</h1>
      <div>Box Page Content</div>
    </SiderLayoutWrapper>
  </div>
);

export default BoxPage;
