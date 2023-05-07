import Image from "next/image";
import img1 from "/public/assets/brazil-stand.jpg";

export default function Brazil() {
  return (
    <section className="flex px-20 py-32 justify-center items-center" id="brazil">
      <div className="w-1/2">
        <Image
          src={img1}
          width={800}
          height={600}
          alt=""
          className="w-128 h-128 object-cover m-auto rounded shadow-lg"
        />
      </div>
      <div className="w-1/2">
        <h1 className="inline-block text-3xl text-marrom_escuro border-b-2 border-solid border-ambar mb-5">
          Why Brazilian Aesthetics?
        </h1>
        <p className="text-17 text-marrom_medio">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae
          orci eget nulla mollis efficitur. Duis eget hendrerit eros. Integer
          ultrices ante non tortor sagittis elementum. In semper dolor id turpis
          consequat porttitor. Donec faucibus eros eu augue rhoncus sodales. In
          hac habitasse platea dictumst. Maecenas interdum tempus tincidunt.
          Duis finibus urna ut malesuada aliquam. Sed interdum, dolor a
          efficitur finibus, sapien purus suscipit dui, at pulvinar nisi nunc
          malesuada nisi.
        </p>
      </div>
    </section>
  );
}
