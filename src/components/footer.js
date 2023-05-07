import { greatVibes } from "../../public/styles/font";

export default function Footer() {
  return (
    <footer className="py-6 px-24 flex justify-between items-center bg-mescuro/40">
      <div className="flex items-center">
        <h1 className="text-3xl">
          <span className={greatVibes.className}>Padoca Bakery</span>
        </h1>
      </div>
      <div>
        <h4>Copyright &copy; by Padoca Bakery | 2023</h4>
      </div>
    </footer>
  );
}
