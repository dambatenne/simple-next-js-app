import Image from "next/image";
import homeImg from "public/home.jpg"

export default function Home() {
  return (
    <div>
      Home page
      <Image
        src={homeImg}
        alt="car factory"
        // fill
        // style={{ objectFit: 'cover' }}
      />
    </div>
  );
}
