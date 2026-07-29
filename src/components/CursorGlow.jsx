import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let raf;

    const move = (e) => {
      x = e.clientX;
      y = e.clientY;
    };

    const render = () => {
      el.style.transform = `translate3d(${x - 200}px, ${y - 200}px, 0)`;
      raf = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[1] hidden h-[400px] w-[400px] rounded-full opacity-40 blur-[90px] md:block"
      style={{
        background:
          "radial-gradient(circle, rgba(139,92,246,0.35) 0%, rgba(6,182,212,0.15) 45%, transparent 70%)",
        willChange: "transform",
      }}
    />
  );
}
