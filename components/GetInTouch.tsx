"use client";

import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

import { SiGmail } from "react-icons/si";
import { LinkPreview } from "./ui/link-preview";
import { SOCIAL_MEDIA } from "@/constants/social-media";
import { Snackbar, SnackbarType } from "@/components/component/snackbar";
import { Spinner } from "@/components/component/spinner";

const WhiteGlobe = dynamic(
  () => import("./component/globe-white").then((module) => module.WhiteGlobe),
  {
    ssr: false,
  },
);

const GetInTouch = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [snackbar, setSnackbar] = useState<{
    isVisible: boolean;
    message: string;
    type: SnackbarType;
  }>({
    isVisible: false,
    message: "",
    type: "success",
  });
  const [isDesktopViewport, setIsDesktopViewport] = useState<boolean | null>(
    null,
  );
  const [isGlobeVisible, setIsGlobeVisible] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const updateViewport = () => {
      setIsDesktopViewport(mediaQuery.matches);
    };

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);

    return () => {
      mediaQuery.removeEventListener("change", updateViewport);
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsGlobeVisible(entry.isIntersecting);
      },
      {
        rootMargin: "200px 0px",
      },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const showSnackbar = (message: string, type: SnackbarType) => {
    setSnackbar({
      isVisible: true,
      message,
      type,
    });
  };

  const hideSnackbar = () => {
    setSnackbar((prev) => ({
      ...prev,
      isVisible: false,
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        showSnackbar(
          "Message sent successfully! Thanks for reaching out. I will get back to you soon. 🚀",
          "success",
        );
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send");
      }
    } catch (_error) {
      showSnackbar(
        "Failed to send message. Please try again or contact me directly. 😔",
        "error",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Snackbar
        message={snackbar.message}
        type={snackbar.type}
        isVisible={snackbar.isVisible}
        onClose={hideSnackbar}
        duration={5000}
      />

      <div
        id="get-in-touch"
        ref={sectionRef}
        className="flex w-full flex-col items-center justify-center gap-8 py-20 md:gap-10 md:py-24"
      >
        <h1 className="mr-auto px-4 text-left text-3xl font-bold sm:text-4xl md:mr-0 md:text-center md:text-5xl">
          Get In Touch
        </h1>

        <h3 className="mr-auto px-4 text-base sm:text-lg md:mr-0">
          Wherever you are in the world, let's connect and work together!
        </h3>

        <p className="mb-6 max-w-4xl px-4 text-left text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-base md:mb-8 md:text-justify">
          Hello world! I am excited to collaborate, work and learn from other
          developers out there! Feel free to reach out to me for any project
          ideas, opportunities, or just to say hello. I'd really appreciate it!
        </p>

        <div className="relative mx-auto flex w-full max-w-7xl flex-col items-stretch justify-center gap-6 px-4 sm:px-6 lg:flex-row">
          <div className="shadow-input relative z-10 mx-auto w-full max-w-md rounded-2xl bg-white p-5 transition duration-500 hover:dark:bg-black/90 dark:bg-black/50 sm:p-6 md:p-8">
            <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
              Send Me A Message
            </h2>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
              Enter your details and message, and I will definitely read your
              message and feedback! Positive vibes only! &#128522;
            </p>

            <form className="my-8" onSubmit={handleSubmit}>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Vernon Tamba"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isLoading}
                  required
                />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  placeholder="vernon.tamba777@gmail.com"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isLoading}
                  required
                />
              </LabelInputContainer>

              <LabelInputContainer className="mb-4">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Your message here..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isLoading}
                  required
                />
              </LabelInputContainer>

              <button
                className="group/btn relative flex items-center justify-center gap-2 h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Spinner size="sm" className="text-white" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <SiGmail className="mt-0.5" />
                  </>
                )}
                <BottomGradient />
              </button>

              <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
            </form>
          </div>

          {isDesktopViewport ? (
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 hidden -translate-x-1/2 -translate-y-1/2 transform lg:block">
              {isGlobeVisible ? (
                <WhiteGlobe size={500} />
              ) : (
                <div className="h-[500px] w-[500px]" />
              )}
            </div>
          ) : null}

          {isDesktopViewport === false ? (
            <div className="flex w-full justify-center lg:hidden">
              {isGlobeVisible ? (
                <WhiteGlobe size={300} />
              ) : (
                <div className="h-[300px] w-[300px]" />
              )}
            </div>
          ) : null}

          <div className="shadow-input relative z-10 mx-auto w-full max-w-md rounded-2xl bg-white p-5 transition duration-500 hover:dark:bg-black/90 dark:bg-black/50 sm:p-6 md:p-8">
            <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
              Connect With Me
            </h2>
            <p className="mb-10 mt-2 max-w-sm text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 md:mb-12">
              Feel free to connect with me on social media! I am always open to
              new connections and friends. &#129309;
            </p>
            <div className="flex flex-col gap-8 md:gap-10">
              {SOCIAL_MEDIA.map((socialMedia) => (
                <LinkPreview
                  url={socialMedia.url}
                  key={socialMedia.title}
                  imageSrc={socialMedia.imageSrc}
                  width={220}
                  height={220}
                  className="flex w-full items-center gap-4 break-words text-base font-normal"
                  isStatic
                >
                  {socialMedia.icon}
                  {socialMedia.title}
                </LinkPreview>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInTouch;

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
