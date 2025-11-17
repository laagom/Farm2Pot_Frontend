import SiderLayout from "./SiderLayout";

type Props = {
  children: React.ReactNode;
};

export default function SiderLayoutWrapper({ children }: Props) {
  return <SiderLayout>{children}</SiderLayout>;
}
