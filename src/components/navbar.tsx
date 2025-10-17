"use client";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const router = useRouter();
  return (
    <div className="flex flex-row justify-between items-center">
      <div>
        <button onClick={() => router.push("/")}>LOGO</button>
      </div>
      <div className="flex flex-row space-x-[36px]">
        <button className="text-[20px] hover:text-gray-300">About</button>
        <button
          className="text-[20px] hover:text-gray-300"
          onClick={() => router.push("/work")}
        >
          Work
        </button>
        <button className="text-[20px] hover:text-gray-300">Contact</button>
        <a
          className="text-[20px] hover:text-gray-300"
          href={"/Jimin_Kim_Resume.pdf"}
          target="_blank"
        >
          Resume
        </a>
      </div>
    </div>
  );
}
