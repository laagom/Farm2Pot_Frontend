import styles from "@core/styles/variables.module.scss";
import SiderLayoutWrapper from "../common/sider/SiderLayoutWrapper";

const InventoryPage = () => (
  <div className={styles.adminLayout}>
    <SiderLayoutWrapper>
      <h1>Admin Inventory Page</h1>
      <div>Inventory Page Content</div>
    </SiderLayoutWrapper>
  </div>
);

export default InventoryPage;
