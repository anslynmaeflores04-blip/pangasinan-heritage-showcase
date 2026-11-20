import Brand from "../molecules/Brand";

export default function Header() {
  return (
    <header className="site-header">
      <Brand />

      <nav aria-label="Main navigation">
        <a href="#discover">Discover</a>
        <a href="#about">Our story</a>
        <a className="nav-cta" href="#plan">
          Plan a visit <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}