import styles from "@core/styles/variables.module.scss";
import SiderLayoutWrapper from "../common/sider/SiderLayoutWrapper";

const ProductNewPage = () => (
  <div className={styles.adminLayout}>
    <SiderLayoutWrapper>
      <h1>Admin Product New Page</h1>
      <div>Products New Page Content</div>
    </SiderLayoutWrapper>
  </div>
);

export default ProductNewPage;
