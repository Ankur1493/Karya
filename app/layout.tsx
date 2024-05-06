import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";

const sans = Open_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Karya",
  description: "Karya is a todo application which lets you helps you in time management. You should use Karya if you face issues to work according to your schedule, create a todo list with us and let's go",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sans.className}>
        <div>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
