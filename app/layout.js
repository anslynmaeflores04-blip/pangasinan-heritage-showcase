import "./globals.css";

export const metadata = {
  title: "Pangasinan Heritage | Discover More",
  description: "Explore the islands, lighthouses, and natural wonders of Pangasinan."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
