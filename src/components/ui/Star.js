import { VscStarFull } from "react-icons/vsc";

function Star({ filled }) {
  const color = filled ? "#f4ce14" : "#ccc";

  return (
    <span style={{ color, fontSize: "1.5rem" }}>
      <VscStarFull />
    </span>
  );
}

export default Star;
