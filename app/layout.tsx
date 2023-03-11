import "../styles/globals.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <title>Netflix Clone</title>
      </head>
      <body>
        {/* Navbar */}
        <Navbar />
        {/* Sidebar */}
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
