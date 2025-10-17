import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col items-center text-center space-y-[12px]">
        <div>
          <h3>handcoded & designed</h3>
          <h3>©2025 - jimin kim</h3>
        </div>
        <div className="flex flex-row space-x-[16px] items-center">
          <a href="https://github.com/by04min" target="_blank">
            <Image src="/github.svg" alt="GitHub" width={20} height={20} />
          </a>
          <a href="mailto:jiminimkim@g.ucla.edu" target="_blank">
            <Image
              src="/envelope-fill.svg"
              alt="Email"
              width={20}
              height={20}
            />
          </a>
          <a href="https://linkedin.com/in/jiminimkim" target="_blank">
            <Image src="/linkedin.svg" alt="LinkedIn" width={20} height={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
