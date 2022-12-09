import Image from "next/image";
export default function StarsDivider() {
  return (
    <div className="stars-divider">
      <Image
        src="/cards/star.png"
        alt="star"
        width={40}
        height={40}
        className="star filter-purple"
      />
      <Image
        src="/cards/star.png"
        alt="star"
        width={40}
        height={40}
        className="star filter-purple"
      />
      <Image
        src="/cards/star.png"
        alt="star"
        width={40}
        height={40}
        className="star filter-purple"
      />
    </div>
  );
}
