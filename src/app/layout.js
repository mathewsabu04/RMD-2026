import "./globals.css";
import { Header } from "./containers/Headers";
export const metadata = {
  title: "RMD",
  description: "RMD App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <section className="px-8">{children}</section>
      </body>
    </html>
  );
}
