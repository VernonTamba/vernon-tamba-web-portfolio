"use client";

import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { cn } from "@/lib/utils";
import { useState } from "react";

import { WhiteGlobe } from "./component/globe-white";
import { SiGmail } from "react-icons/si";
import { LinkPreview } from "./ui/link-preview";
import { SOCIAL_MEDIA } from "@/constants/social-media";
import { Snackbar, SnackbarType } from "@/components/component/snackbar";
import { Spinner } from "@/components/component/spinner";

const GetInTouch = () => {
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
    } catch (error) {
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
        className="py-20 w-full flex flex-col items-center justify-center gap-10"
      >
        <h1 className="text-5xl font-bold text-left md:text-center px-4 mr-auto md:mr-0">
          Get In Touch
        </h1>

        <h3 className="text-lg px-4 mr-auto md:mr-0">
          Wherever you are in the world, let's connect and work together!
        </h3>

        <p className="text-left md:text-justify max-w-4xl px-4 text-neutral-600 dark:text-neutral-400 mb-8">
          Hello world! I am excited to collaborate, work and learn from other
          developers out there! Feel free to reach out to me for any project
          ideas, opportunities, or just to say hello. I'd really appreciate it!
        </p>

        <div className="relative flex flex-col md:flex-row justify-center items-stretch gap-4 w-full max-w-7xl mx-auto">
          {/* Left Form */}
          <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black/50 hover:dark:bg-black/90 transition duration-500 relative z-10">
            <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
              Send Me A Message
            </h2>
            <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
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

          {/* Globe - Centered between both divs */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 hidden md:block pointer-events-none">
            <WhiteGlobe size={500} />
          </div>

          {/* Mobile Globe - shows below on small screens */}
          <div className="md:hidden w-full flex justify-center">
            <WhiteGlobe size={300} />
          </div>

          {/* Right Social Media Section */}
          <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black/50 hover:dark:bg-black/90 transition duration-500 relative z-10">
            <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
              Connect With Me
            </h2>
            <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300 mb-12">
              Feel free to connect with me on social media! I am always open to
              new connections and friends. &#129309;
            </p>
            <div className="flex flex-col gap-12">
              {SOCIAL_MEDIA.map((socialMedia) => (
                <LinkPreview
                  url={socialMedia.url}
                  key={socialMedia.title}
                  imageSrc={socialMedia.imageSrc}
                  width={250}
                  height={250}
                  className="text-base font-normal flex items-center gap-4"
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
