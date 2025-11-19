import styles from "@core/styles/variables.module.scss";
import SiderLayoutWrapper from "../common/sider/SiderLayoutWrapper";
import ProductUpload from "./ProductUpload";

const ProductNewPage = () => (
  <div className={styles.adminLayout}>
    <SiderLayoutWrapper>
      {/* 상품등록 세부 */}
      <ProductUpload />
    </SiderLayoutWrapper>
  </div>
);

export default ProductNewPage;
