import styles from "@core/styles/variables.module.scss";
import SiderLayoutWrapper from "../common/sider/SiderLayoutWrapper";

const ProductsPage = () => (
  <div className={styles.adminLayout}>
    <SiderLayoutWrapper>
      <h1>Admin Product Page</h1>
      <div>Products Page Content</div>
    </SiderLayoutWrapper>
  </div>
);

export default ProductsPage;
