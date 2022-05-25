import React from "react";
import { useRouter } from "next/router";
import gsap from "gsap";

const hideElements = () => {
  if (typeof window === "undefined") {
    return;
  }

  gsap.to("body", {
    css: { opacity: 0 },
  });
};

const Error404: React.FC = ({}) => {
  const router = useRouter();
  const path = router.pathname;

  return (
    <div
      id="home"
      data-scroll-section
      className="z-10 flex h-screen items-center justify-center bg-[#000405]"
    >
      <div className="relative m-auto">
        <span className="header-text text-clamp ">
          ERROR <span className="text-9xl sm:text-7xl">404</span> <br /> PAGE
          NOT FOUND <br />
          <span
            onClick={async () => {
              await router.push("/");
              hideElements();
              setTimeout(() => {
                router.reload();
              }, 700);
            }}
            className="mt-5 inline-block cursor-pointer rounded-full border-2 border-white py-2 px-5 pb-5 font-playfair text-5xl italic sm:text-3xl"
          >
            return
          </span>{" "}
        </span>
      </div>
    </div>
  );
};

export default Error404;
