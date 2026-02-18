import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import {
  FACEBOOK_URL,
  GITHUB_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  WHATSAPP_URL,
} from "./urls";

export const SOCIAL_MEDIA = [
  {
    url: WHATSAPP_URL,
    title: "WhatsApp",
    imageSrc: "/images/whatsapp.png",
    icon: (
      <FaWhatsapp className="text-4xl transition-colors duration-300 hover:text-[#25D366]" />
    ),
  },
  {
    url: FACEBOOK_URL,
    title: "Facebook",
    imageSrc: "/images/facebook.png",
    icon: (
      <FaFacebook className="text-4xl transition-colors duration-300 hover:text-[#1877F2]" />
    ),
  },
  {
    url: INSTAGRAM_URL,
    title: "Instagram",
    imageSrc: "/images/instagram.png",
    icon: (
      <FaInstagram className="text-4xl transition-colors duration-300 hover:text-[#E4405F]" />
    ),
  },
  {
    url: LINKEDIN_URL,
    title: "LinkedIn",
    imageSrc: "/images/linkedin.png",
    icon: (
      <FaLinkedin className="text-4xl transition-colors duration-300 hover:text-[#0A66C2]" />
    ),
  },
  {
    url: GITHUB_URL,
    title: "GitHub",
    imageSrc: "/images/github.png",
    icon: (
      <FaGithub className="text-4xl transition-colors duration-300 hover:text-[#333]" />
    ),
  },
];
