import { EncryptedText } from "./ui/encrypted-text";
import { FlipWords } from "./ui/flip-words";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const words = [
    "Thank You", // English
    "Terima kasih", // Indonesian
    "Salamat po", // Filipino (polite)
    "Gracias", // Spanish
    "Merci", // French
    "Danke", // German
    "ありがとう", // Japanese (Arigatou)
    "谢谢", // Mandarin (Simplified Chinese)
    "고마워요", // Korean (casual polite)
    "Grazie", // Italian
    "Obrigado", // Portuguese (male speaker)
    "Спасибо", // Russian
    "شكراً", // Arabic
    "धन्यवाद", // Hindi
    "ขอบคุณ", // Thai
    "Cảm ơn", // Vietnamese
    "Teşekkür ederim", // Turkish
    "Ευχαριστώ", // Greek
    "תודה", // Hebrew
    "Dziękuję", // Polish
    "Tack", // Swedish
    "Dank je", // Dutch
  ];

  return (
    <div
      id="footer"
      className="relative flex min-h-[50vh] md:min-h-screen w-full flex-col items-center justify-center gap-6 overflow-hidden py-16 md:gap-8 md:py-24"
    >
      <FlipWords
        words={words}
        duration={1000}
        className="text-center text-3xl font-extrabold leading-tight sm:text-6xl md:text-7xl lg:text-8xl xl:text-[130px]"
      />
      <p className="mx-auto pt-10 text-xs font-light sm:text-sm md:text-base">
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
