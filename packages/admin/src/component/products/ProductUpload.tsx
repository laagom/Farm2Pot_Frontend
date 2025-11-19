import { useState } from "react";
import "./ProductUpload.css";

const ProductUpload: React.FC = () => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewImage(url);
    }
  };

  return (
    <div className="product-container">
      {/* Left Area */}
      <div className="left-section">
        <div className="image-area">
          {previewImage ? (
            <img src={previewImage} alt="preview" />
          ) : (
            <div className="placeholder">이미지를 업로드하세요</div>
          )}
        </div>

        <label className="upload-btn">
          Upload
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </label>
      </div>

      {/* Right Area */}
      <div className="right-section">
        <div className="form-item">
          <label>상품명</label>
          <input type="text" />
        </div>

        <div className="form-item">
          <label>상품코드</label>
          <input type="text" />
        </div>

        <div className="form-item">
          <label>상품가격</label>
          <input type="number" />
        </div>

        <div className="form-item">
          <label>상품무게</label>
          <input type="number" step="0.01" />
        </div>

        <div className="form-item">
          <label>원산지</label>
          <select>
            <option value="">선택하세요</option>
            <option value="korea">한국</option>
            <option value="china">중국</option>
            <option value="usa">미국</option>
          </select>
        </div>

        <div className="form-item">
          <label>카테고리</label>
          <select>
            <option value="">선택하세요</option>
            <option value="food">식품</option>
            <option value="fashion">패션</option>
            <option value="living">리빙</option>
          </select>
        </div>

        <div className="form-item">
          <label>상세이미지</label>
          <input type="file" accept="image/*" multiple />
        </div>
      </div>
    </div>
  );
};

export default ProductUpload;
