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
    "Спасибо",
    "謝謝",
    "ありがとう",
  ];

  return (
    <div
      id="#about-me"
      className="min-h-screen md:h-screen w-full flex flex-col items-center justify-center gap-8 relative overflow-hidden"
    >
      <FlipWords
        words={words}
        duration={1000}
        className="font-extrabold text-4xl md:text-[150px] text-center"
      />{" "}
      <p className="text-xs md:text-base mx-auto pt-10 font-light">
        <EncryptedText
          text={`Copyright © ${currentYear} Vernon Tamba`}
          encryptedClassName="text-neutral-500"
          revealedClassName="dark:text-white text-black"
          revealDelayMs={50}
        />
      </p>
    </div>
  );
};

export default Footer;
