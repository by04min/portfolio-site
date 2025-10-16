export default function NavBar() {
  return (
    <div className="flex flex-row justify-between items-center">
      <div>
        <label>LOGO</label>
      </div>
      <div className="flex flex-row space-x-[36px]">
        <button className="text-[20px]">About</button>
        <button className="text-[20px]">Work</button>
        <button className="text-[20px]">Contact</button>
        <a
          className="text-[20px]"
          href={"/Jimin_Kim_Resume.pdf"}
          target="_blank"
        >
          Resume
        </a>
      </div>
    </div>
  );
}
