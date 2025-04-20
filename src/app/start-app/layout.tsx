import type { Metadata } from "next";
import Sidebar from "../components/sidebar/sidebar";

export const metadata: Metadata = {
  title: "Mentiq",
  description: "AI will for you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
        <div className=" flex">
          <Sidebar />
          {children}
      
        </div>
  );
}
