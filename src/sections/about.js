import Image from "next/image";
import img1 from "/public/assets/breads.jpg";

export default function About() {
  return (
    <section className="flex p-24 pb-20 justify-center items-center" id="about">
      <div className="w-1/2 mr-2 p-10">
        <h2 className="inline-block text-3xl text-marrom_escuro border-b-2 border-solid border-ambar mb-5">About our story</h2>
        <p className="text-marrom_medio text-17">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae
          orci eget nulla mollis efficitur. Duis eget hendrerit eros. Integer
          ultrices ante non tortor sagittis elementum. In semper dolor id turpis
          consequat porttitor. Donec faucibus eros eu augue rhoncus sodales. In
          hac habitasse platea dictumst. Maecenas interdum tempus tincidunt.
          Duis finibus urna ut malesuada aliquam. Sed interdum, dolor a
          efficitur finibus, sapien purus suscipit dui, at pulvinar nisi nunc
          malesuada nisi.
        </p>
        <p className="mt-2 text-marrom_medio text-17">
          Cras vulputate fermentum enim. Vestibulum ac lacus leo. Cras sed ante
          in justo congue ultrices. Nam aliquet, magna quis finibus aliquet,
          massa quam mollis velit, pharetra porta erat sapien non purus.
          Vestibulum ut nisi orci. Etiam condimentum tempus sem id viverra.
          Phasellus in feugiat eros, eget blandit lorem. Fusce vestibulum, nibh
          ut tincidunt maximus, lectus risus mattis ipsum, at eleifend diam
          lectus vel diam. Curabitur consequat est diam, id laoreet elit varius
          sit amet. Donec tincidunt commodo tempus.
        </p>
      </div>
      <div className="w-1/2">
        <Image src={img1} width={1920} height={1080} alt="" className="w-128 h-128 object-cover m-auto rounded shadow-lg" />
      </div>
    </section>
  );
}
