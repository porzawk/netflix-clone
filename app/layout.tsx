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

        <div className="pl-56 pt-12 h-screen bg-white dark:bg-black">
          <div className="h-full overflow-y-auto p-4 dark:text-white">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
