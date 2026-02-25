import { EncryptedText } from "./ui/encrypted-text";
import { FlipWords } from "./ui/flip-words";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const words = [
    "Thank You",
    "Terima Kasih",
    "Salamat Po",
    "Gracias",
    "Merci",
    "Danke",
    "Arigato",
    "Grazie",
    "Obrigado",
    "Spasibo",
    "Xie Xie",
    "Arigatou",
  ];

  return (
    <div
      id="footer"
      className="relative flex min-h-screen w-full flex-col items-center justify-center gap-6 overflow-hidden py-20 md:gap-8 md:py-24"
    >
      <FlipWords
        words={words}
        duration={1000}
        className="text-center text-4xl font-extrabold leading-tight sm:text-6xl md:text-7xl lg:text-8xl xl:text-[150px]"
      />
      <p className="mx-auto pt-10 text-xs font-light sm:text-sm md:text-base">
        <EncryptedText
          text={`Copyright (c) ${currentYear} Vernon Tamba`}
          encryptedClassName="text-neutral-500"
          revealedClassName="dark:text-white text-black"
          revealDelayMs={50}
        />
      </p>
    </div>
  );
};

export default Footer;
