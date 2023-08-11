import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Temperature Converter",
  description:
    "Experience seamless temperature conversions with our user-friendly web app! Convert between Celsius, Fahrenheit, and Kelvin instantly. Enjoy real-time updates, intuitive design, and easy sharing. No installation required – start converting hassle-free today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#fce4ec" }}>
        <h1>
          Temperature Converter{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-thermometer-high"
            viewBox="0 0 16 16"
          >
            <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V2.5a.5.5 0 0 1 1 0v8.585a1.5 1.5 0 0 1 1 1.415z" />
            <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z" />
          </svg>
        </h1>
        {children}
      </body>
    </html>
  );
}
