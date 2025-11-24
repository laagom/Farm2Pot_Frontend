import { useRef, useState } from "react";
import styles from "./ProductUpload.module.scss";

const ProductUpload: React.FC = () => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewImage(url);
    }
  };

  const handleRemoveImage = () => {
    setPreviewImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // input 초기화
    }
  };

  return (
    <div className={styles.productContainer}>
      {/* Left Area */}
      <div className={styles.productContainer__leftSection}>
        <div className={styles.productContainer__leftSection__imageArea}>
          {previewImage ? (
            <div className={styles.imageWrapper}>
              <img src={previewImage} alt="preview" />
              <button className={styles.removeBtn} onClick={handleRemoveImage}>
                x
              </button>
            </div>
          ) : (
            <div className={styles.placeholder}>이미지를 업로드하세요</div>
          )}
        </div>

        <label className={styles.productContainer__leftSection__uploadBtn}>
          Upload
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            ref={fileInputRef}
          />
        </label>
      </div>

      {/* Right Area */}
      <div className={styles.productContainer__rightSection}>
        <div className={styles.productContainer__rightSection__formItem}>
          <label>상품명</label>
          <input type="text" />
        </div>

        <div className={styles.productContainer__rightSection__formItem}>
          <label>상품코드</label>
          <input type="text" />
        </div>

        <div className={styles.productContainer__rightSection__formItem}>
          <label>상품가격</label>
          <input type="number" />
        </div>

        <div className={styles.productContainer__rightSection__formItem}>
          <label>상품무게</label>
          <input type="number" step="0.01" />
        </div>

        <div className={styles.productContainer__rightSection__formItem}>
          <label>원산지</label>
          <select>
            <option value="">선택하세요</option>
            <option value="korea">한국</option>
            <option value="china">중국</option>
            <option value="usa">미국</option>
          </select>
        </div>

        <div className={styles.productContainer__rightSection__formItem}>
          <label>카테고리</label>
          <select>
            <option value="">선택하세요</option>
            <option value="food">식품</option>
            <option value="fashion">패션</option>
            <option value="living">리빙</option>
          </select>
        </div>

        <div className={styles.productContainer__rightSection__formItem}>
          <label>상세이미지</label>
          <input type="file" accept="image/*" multiple />
        </div>
      </div>
    </div>
  );
};

export default ProductUpload;
