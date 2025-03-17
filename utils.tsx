export function splitText(text: string, className?: string) {
  return text.split("").map((char, index) => (
    <span
      key={index}
      className={`${className ? className : ""}`}
      style={{ display: "inline-block" }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));
}
