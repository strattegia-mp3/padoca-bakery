import Image from "next/image";
import img1 from "/public/assets/bakery-display.jpg";

export default function Menu() {
  return (
    <section className="flex py-28 relative ml-7 justify-center items-center" id="menu">
      <div className="w-2/3 py-10 px-16 bg-chocolate/20 rounded shadow-lg relative z-10">
        <div className="w-[75%]">
          <h1 className="inline-block border-b-2 border-solid border-ambar_line text-3xl text-marrom_escuro mb-1">
            Menu
          </h1>
          <h4 className="text-base text-marrom_medio mb-10 pr-[25%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae
            orci eget nulla mollis efficitur. Duis eget hendrerit eros.
          </h4>
          <ul>
            <li className="inline-block border-b-2 border-solid border-ambar_line mb-4">
              <h4 className="text-xl text-marrom_escuro font-bold">
                Pão francês<span className="float-right">$1.00</span>
              </h4>
              <p className="my-2 text-marrom_medio">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </li>
            <li className="inline-block border-b-2 border-solid border-ambar_line mb-4">
              <h4 className="text-xl text-marrom_escuro font-bold">
                Pão de queijo<span className="float-right">$1.00</span>
              </h4>
              <p className="my-2 text-marrom_medio">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </li>
            <li className="inline-block border-b-2 border-solid border-ambar_line mb-4">
              <h4 className="text-xl text-marrom_escuro font-bold">
                Pão de açúcar<span className="float-right">$1.00</span>
              </h4>
              <p className="my-2 text-marrom_medio">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </li>
            <li className="inline-block border-b-2 border-solid border-ambar_line mb-4">
              <h4 className="text-xl text-marrom_escuro font-bold">
                Pão carteiro<span className="float-right">$1.00</span>
              </h4>
              <p className="my-2 text-marrom_medio">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-1/3 absolute top-[15%] right-0 bottom-0 left-[60%] z-20">
        <Image
          src={img1}
          width={1920}
          height={1080}
          alt=""
          className="w-128 h-128 object-cover rounded shadow-lg"
        />
      </div>
    </section>
  );
}
