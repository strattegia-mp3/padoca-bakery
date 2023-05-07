import { useForm } from "react-hook-form";
import Image from "next/image";
import img1 from "/public/assets/padocaHatTransp.png";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <section className="p-24" id="contact">
      <div className="flex p-10 bg-chocolate/30 rounded shadow-lg">
        <div className="w-1/2 flex justify-center items-center">
          <Image src={img1} alt="" className="w-80 h-80" />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-1/2 p-10 bg-chocolate/20 rounded shadow-lg"
        >
          <div className="flex items-center justify-center">
            <h1 className="inline-block text-3xl text-marrom_escuro border-b-2 border-solid border-ambar/80 mb-5 text-center">
              Contact Us!
            </h1>
          </div>
          <div className="mb-4">
            <label
              className="block text-marrom_escuro font-bold mb-2"
              htmlFor="firstName"
            >
              Full Name
            </label>
            <input
              type="text"
              placeholder="First name"
              {...register("First name", { required: true, maxLength: 80 })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-marrom_escuro font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Email"
              {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-marrom_escuro font-bold mb-2"
              htmlFor="mobileNumber"
            >
              Mobile Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="tel"
              placeholder="Mobile Number"
              {...register("Mobile number", {
                required: true,
                minLength: 6,
                maxLength: 12,
              })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-marrom_escuro font-bold mb-2">
              Your Mesage
            </label>
            <textarea
              {...register("Mensage", { required: true, max: 1000, min: 100 })}
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
            />
          </div>

          <input
            type="submit"
            className="px-4 py-2 rounded-md bg-chocolate text-white hover:bg-chocolate/80 transition-colors duration-300 ease-in-out cursor-pointer"
          />
        </form>
      </div>
    </section>
  );
}
