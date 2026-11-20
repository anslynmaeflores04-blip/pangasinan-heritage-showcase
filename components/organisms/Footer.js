import Brand from "../molecules/Brand";

export default function Footer() {
  return (
    <footer className="site-footer">
      <Brand />

      <p>Made to celebrate the places we call home.</p>

      <a href="#home" className="back-top">
        Back to top ↑
      </a>

      <div className="footer-bottom">
        <span>ACADEMIC PROJECT · ACTIVITY 2</span>
        <span>© 2026 PANGASINAN HERITAGE DIGITAL SHOWCASE</span>
      </div>
    </footer>
  );
}