// Efeitos de rolagem da página inicial (GSAP + ScrollTrigger).
// Para animar outro bloco, é só colocar o seletor dele nesta lista.
const EFEITOS = [".hero-txt", ".mock", ".beneficios li", ".secao-cab", ".passos .card", "#por-que", ".plano", ".cta"];

if (window.gsap && window.ScrollTrigger && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  gsap.registerPlugin(ScrollTrigger);
  document.querySelectorAll(EFEITOS.join(",")).forEach((el) => el.classList.add("efeito"));
  document.documentElement.classList.add("efeitos-on");

  gsap.utils.toArray(".efeito").forEach((classe) => {
    gsap.to(classe, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
      filter: "blur(0px)",
      scrollTrigger: {
        trigger: classe,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  });
}