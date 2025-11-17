import styles from "@core/styles/variables.module.scss";
import SiderLayout from "../common/sider/SiderLayout";

function AdminLayout() {
  return (
    <div className={styles.adminLayout}>
      <SiderLayout>
        <h1>Admin Main Page</h1>
        <p>Main Page Content</p>
      </SiderLayout>
    </div>
  );
}

export default AdminLayout;
