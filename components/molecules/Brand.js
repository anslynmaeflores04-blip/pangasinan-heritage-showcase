import BrandMark from "../atoms/BrandMark";

export default function Brand() {
  return (
    <a className="brand" href="#home" aria-label="Pangasinan Heritage home">
      <BrandMark />
      <span>
        PANGASINAN
        <span className="brand-sub">HERITAGE SHOWCASE</span>
      </span>
    </a>
  );
}