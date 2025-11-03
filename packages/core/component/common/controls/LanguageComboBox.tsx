import styles from "./LanguageComboBox.module.scss";
type LanguageSelectProps = {
  value: string;
  onChange: (value: string) => void;
};

const languages = [
  { code: "ko", label: "한국어" },
  { code: "en", label: "English" },
  { code: "ja", label: "日本語" },
];

function LanguageComboBox({ value, onChange }: LanguageSelectProps) {
  return (
    <select
      className={styles.languageSelect}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ padding: "4px 8px" }}
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.label}
        </option>
      ))}
    </select>
  );
}

export default LanguageComboBox;
