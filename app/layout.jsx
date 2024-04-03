import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import { ConfigProvider } from "antd";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
export const metadata = {
  title: "Korean Clinic",
  description: "Family Dental care",
};

export default function RootLayout({ children }) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Modal: {
            titleFontSize: 24,
          },
        },
      }}
    >
      <html lang="en">
        <body className={poppins.className}>{children}</body>
      </html>
    </ConfigProvider>
  );
}
