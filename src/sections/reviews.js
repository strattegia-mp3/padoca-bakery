import Image from "next/image";
import img1 from "/public/assets/woman-smile-bakery.jpg";
import Rating from "@/components/rating";

export default function Reviews() {
  return (
    <section className="px-24 py-40" id="reviews">
      <div className="flex bg-chocolate/30 rounded shadow-lg p-10">
        <div className="w-1/2">
          <Image
            src={img1}
            width={1920}
            height={1080}
            alt=""
            className="w-128 w-128 object-cover rounded shadow-lg"
          />
        </div>
        <div className="w-1/2 text-center justify-center items-center">
          <h1 className="inline-block text-3xl text-marrom_escuro border-b-2 border-solid border-ambar_line mb-5">Reviews</h1>
          <Rating />
          <p className="text-17 text-marrom_medio mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae
            orci eget nulla mollis efficitur. Duis eget hendrerit eros. Integer
            ultrices ante non tortor sagittis elementum. In semper dolor id
            turpis consequat porttitor. Donec faucibus eros eu augue rhoncus
            sodales. In hac habitasse platea dictumst. Maecenas interdum tempus
            tincidunt. Duis finibus urna ut malesuada aliquam. Sed interdum,
            dolor a efficitur finibus, sapien purus suscipit dui, at pulvinar
            nisi nunc malesuada nisi.
          </p>
        </div>
      </div>
    </section>
  );
}
