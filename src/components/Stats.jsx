import { FACEBOOK_MAX_CHARS, INSTAGRAM_MAX_CHARS } from "../lib/constants";

export default function Stats({ text }) {
  const nWords = text.split(" ").filter((word) => word !== "").length;

  return (
    <section className="stats">
      <Stat label="Words" count={nWords} />
      <Stat label="Characters" count={text.length} />
      <Stat label="Instagram" count={INSTAGRAM_MAX_CHARS - text.length} />
      <Stat label="Facebook" count={FACEBOOK_MAX_CHARS - text.length} />
    </section>
  );
}

function Stat({ label, count = 0 }) {
  return (
    <section className="stat">
      <span
        className={`stat__number ${count < 0 ? "stat__number--limit" : ""}`}
      >
        {count}
      </span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}
