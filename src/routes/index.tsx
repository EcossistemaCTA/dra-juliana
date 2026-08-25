import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import heroRetrato from "@/assets/juliana-hero.jpg.asset.json";
import logoTambani from "@/assets/logo-tambani.png.asset.json";
import sobreRetrato from "@/assets/juliana-sobre.jpg.asset.json";
import AppleCardsCarouselDemo from "@/components/ui/apple-cards-carousel-demo";
import FAQSections from "@/components/ui/faq-sections";
import {
  Smile,
  Scan,
  Shield,
  Check,
  Sparkles,
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  Calendar,
  Heart,
  AlignCenter,
  Activity,
} from "lucide-react";

const SITE_URL = "https://clinicatambani.com.br";
const WHATSAPP_URL = "https://wa.me/5569000000000";

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#juliana`,
  name: "Dra. Juliana",
  jobTitle: "Cirurgiã-Dentista · Especialista em Periodontia",
  url: SITE_URL,
  worksFor: { "@type": "Organization", name: "Clínica Tambani" },
  knowsAbout: [
    "Periodontia",
    "Tratamento de Gengivite e Periodontite",
    "Plástica Gengival",
    "Enxerto Gengival",
    "Sorriso Gengival",
    "Saúde e Estética Gengival",
    "Peri-implantite",
  ],
};

const faq = [
  {
    q: "Como sei se preciso de uma consulta com especialista em Periodontia?",
    a: "Se você percebe sangramento ao escovar os dentes ou passar fio dental, gengiva avermelhada, retração gengival (dentes parecendo mais compridos), sensibilidade aumentada ou excesso de gengiva ao sorrir, é fundamental agendar uma avaliação periodontal.",
  },
  {
    q: "A raspagem periodontal ou tratamento de gengiva causa dor?",
    a: "Não. Todos os procedimentos periodontais são realizados com anestesia local apropriada e técnicas delicadas para garantir total conforto durante o tratamento e no pós-operatório.",
  },
  {
    q: "É possível corrigir o excesso de gengiva ou a retração gengival?",
    a: "Sim! Para o excesso de gengiva (sorriso gengival), a plástica gengival remodela a linha do sorriso. Para raízes expostas, realizamos enxertos gengivais que cobrem a raiz e protegem o dente contra a sensibilidade.",
  },
  {
    q: "Como funciona a manutenção periodontal preventiva?",
    a: "Após a fase inicial de tratamento, realizamos acompanhamentos periódicos (geralmente a cada 3 a 6 meses) para higienização profunda, remoção de biofilme e garantia de que sua gengiva continue firme e saudável.",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dra. Juliana — Periodontia & Saúde Gengival | Clínica Tambani" },
      {
        name: "description",
        content:
          "Cirurgiã-dentista especialista em Periodontia na Clínica Tambani. Cuidados com a saúde das gengivas, plástica gengival, tratamento de periodontite e enxertos com planejamento individualizado.",
      },
      { property: "og:title", content: "Dra. Juliana — Periodontia & Saúde Gengival | Clínica Tambani" },
      {
        property: "og:description",
        content:
          "Preservar a sustentação, saúde e estética do seu sorriso com técnicas modernas e atendimento humanizado.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: `${SITE_URL}${heroRetrato.url}` },
      { name: "twitter:image", content: `${SITE_URL}${heroRetrato.url}` },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(personLd) },
      { type: "application/ld+json", children: JSON.stringify(faqLd) },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Inter:wght@300;400;500;600;700&display=swap",
      },
      { rel: "preload", as: "image", href: heroRetrato.url },
    ],
  }),
  component: Home,
});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.35 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

const titleRevealVariants = {
  hidden: { y: "100%", rotate: 2 },
  visible: {
    y: "0%",
    rotate: 0,
    transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

function Hero() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end start"] });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], ["0px", "-40px"]);

  return (
    <section
      ref={targetRef}
      className="relative min-h-[100svh] overflow-hidden bg-deep font-sans text-cream"
    >
      {/* Full Bleed Background Image */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <img
          src={heroRetrato.url}
          alt="Dra. Juliana"
          className="h-full w-full object-cover object-[70%_center] md:object-[75%_center]"
        />
        {/* Sombra / degradê escuro focado na esquerda para leitura perfeita dos textos */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07080a] via-[#07080a]/90 via-50% to-transparent pointer-events-none md:w-[60%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080a] via-transparent to-[#07080a]/40 pointer-events-none" />
        {/* Degradê de fusão suave no rodapé do Hero */}
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#07080a] via-[#07080a]/85 to-transparent pointer-events-none z-10" />
      </motion.div>

      {/* Header Navigation Bar */}
      <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-8 md:px-12">
        <div className="flex items-center gap-3">
          <img src={logoTambani.url} alt="Clínica Tambani" className="h-16 w-auto object-contain md:h-24" />
        </div>
        <nav className="hidden items-center gap-8 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-cream/90 md:flex">
          <a href="#sobre" className="transition hover:text-gold">Sobre</a>
          <a href="#tratamentos" className="transition hover:text-gold">Especialidades</a>
          <a href="#atendimento" className="transition hover:text-gold">Atendimento</a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-cream/40 px-6 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-cream transition hover:border-gold hover:bg-gold hover:text-deep"
          >
            Contato
          </a>
        </nav>
      </header>

      {/* Hero Body Content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex min-h-[calc(100svh-120px)] max-w-7xl flex-col justify-center px-6 pb-20 pt-4 md:px-12"
      >
        <div className="max-w-2xl">
          <motion.p
            variants={itemVariants}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-gold"
          >
            PERIODONTIA — SAÚDE GENGIVAL — PLÁSTICA GENGIVAL
          </motion.p>

          <div className="overflow-hidden">
            <motion.h1
              variants={titleRevealVariants}
              className="font-display text-5xl font-normal leading-[1.05] tracking-tight text-cream sm:text-6xl md:text-7xl"
            >
              Dra.
              <span className="block font-normal italic text-gold">Juliana</span>
            </motion.h1>
          </div>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-lg text-sm leading-relaxed text-cream/80 md:text-base"
          >
            Cirurgiã-dentista especialista em Periodontia, dedicada à saúde das gengivas, plástica gengival estética e preservação da estrutura que sustenta o seu sorriso.
          </motion.p>

          {/* Action Pills Row */}
          <motion.div variants={itemVariants} className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#sobre"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-deep shadow-md shadow-gold/20 transition hover:bg-cream hover:text-deep hover:shadow-lg"
            >
              Conheça a Dra. Juliana
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cream/30 bg-black/30 px-6 py-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-cream backdrop-blur-md transition hover:border-gold hover:bg-black/50 hover:text-gold"
            >
              Agendamento
              <ArrowUpRight className="h-3.5 w-3.5 text-gold" />
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator with Simple White Animated Mouse */}
      <motion.a
        href="#reconhecimento"
        aria-label="Deslizar para a próxima seção"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="group absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 cursor-pointer opacity-70 transition-opacity hover:opacity-100"
      >
        <span className="text-[0.6rem] font-medium uppercase tracking-[0.3em] text-white">
          Deslize
        </span>

        <div className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-white p-1">
          <motion.div
            animate={{
              y: [0, 8, 0],
              opacity: [1, 0.3, 1],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-1.5 w-1 rounded-full bg-white"
          />
        </div>
      </motion.a>
    </section>
  );
}

function GanchoSection() {
  return (
    <section id="reconhecimento" className="relative bg-cream px-6 py-32 font-sans md:px-10 md:py-48 min-h-[85vh] flex items-center justify-center">
      <div className="mx-auto max-w-5xl text-center">
        <span className="mb-3 inline-block text-[0.65rem] font-bold uppercase tracking-[0.35em] text-gold-deep">
          01 — RECONHECIMENTO
        </span>
        <h2 className="mx-auto max-w-3xl font-sans text-3xl font-bold leading-[1.18] tracking-tight text-deep sm:text-4xl md:text-5xl">
          O que pode estar indicando <br className="hidden sm:inline" />
          a necessidade de cuidar da sua <span className="font-serif italic font-normal text-gold-deep">gengiva</span>?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#525f61] md:text-lg">
          A gengiva é a base de sustentação do dente. Identificar os sinais precocemente é o caminho para <strong className="font-semibold text-deep">proteger seu sorriso</strong>.
        </p>

        <div className="mt-16 grid gap-8 text-left md:grid-cols-3">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-3xl border border-deep/10 bg-white/80 p-8 shadow-sm transition hover:shadow-md"
          >
            <span className="text-sm font-bold text-gold-deep">1.</span>
            <h3 className="mt-3 font-sans text-lg font-bold text-deep">Sangramento & Inflamação</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#525f61]">
              Gengivas <strong className="font-semibold text-deep">vermelhas, inchadas</strong> ou que <strong className="font-semibold text-deep">sangram ao escovar</strong> e passar fio dental.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-3xl border border-deep/10 bg-white/80 p-8 shadow-sm transition hover:shadow-md"
          >
            <span className="text-sm font-bold text-gold-deep">2.</span>
            <h3 className="mt-3 font-sans text-lg font-bold text-deep">Retração & Sensibilidade</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#525f61]">
              Dentes com <strong className="font-semibold text-deep">sensibilidade ao frio ou quente</strong> e exposição da raiz por perda do contorno gengival.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-3xl border border-deep/10 bg-white/80 p-8 shadow-sm transition hover:shadow-md"
          >
            <span className="text-sm font-bold text-gold-deep">3.</span>
            <h3 className="mt-3 font-sans text-lg font-bold text-deep">Sorriso Gengival & Estética</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#525f61]">
              Excesso de gengiva exposta ao sorrir ou <strong className="font-semibold text-deep">desarmonia no formato</strong> que afeta a estética do rosto.
            </p>
          </motion.div>
        </div>

        <div className="mt-14">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-deep px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-cream shadow-md transition hover:bg-deep-soft hover:shadow-lg"
          >
            Quero avaliar minha gengiva
            <ArrowUpRight className="h-4 w-4 text-gold" />
          </a>
        </div>
      </div>
    </section>
  );
}

const sobreContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.05,
    },
  },
};

const sobreItemVariants = {
  hidden: {
    opacity: 0,
    y: 85,
    filter: "blur(14px)",
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      duration: 1.15,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

function SobreSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["2%", "14%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.12, 1.04, 1.12]);

  const credenciais = [
    "Cirurgiã-Dentista",
    "Especialista em Periodontia",
    "Plástica Gengival & Enxertos",
    "Clínica Tambani",
  ];

  return (
    <section
      id="sobre"
      ref={ref}
      className="relative min-h-[110svh] overflow-hidden bg-deep font-sans"
    >
      <motion.img
        style={{ y: imageY, scale: imageScale }}
        src={sobreRetrato.url}
        alt="Dra. Juliana"
        className="absolute inset-0 h-full w-full object-cover object-[25%_center] md:object-[20%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-l from-[#07080a] via-[#07080a]/95 to-transparent pointer-events-none md:left-auto md:right-0 md:w-3/5" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#07080a] via-transparent to-[#07080a]/40 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#07080a] via-[#07080a]/85 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#07080a] via-[#07080a]/85 to-transparent pointer-events-none z-10" />

      <div className="relative z-10 mx-auto flex min-h-[110svh] max-w-6xl items-center justify-end px-6 py-28 md:px-10 md:py-40">
        <motion.div
          variants={sobreContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25 }}
          className="ml-auto max-w-xl"
        >
          <motion.p
            variants={sobreItemVariants}
            className="mb-5 text-[0.65rem] uppercase tracking-[0.4em] text-gold font-bold"
          >
            QUEM SOU
          </motion.p>
          <motion.h2
            variants={sobreItemVariants}
            className="font-sans text-4xl font-semibold leading-tight text-cream md:text-5xl"
          >
            Prazer, sou a <span className="font-serif italic font-normal text-gold">Dra. Juliana</span>.
          </motion.h2>
          <motion.p
            variants={sobreItemVariants}
            className="mt-6 text-base leading-relaxed text-cream/90"
          >
            Sou cirurgiã-dentista com especialização dedicada à Periodontia. Acredito que um sorriso radiante e duradouro precisa ter uma estrutura forte e saudável na sua base.
          </motion.p>
          <motion.p
            variants={sobreItemVariants}
            className="mt-4 text-base leading-relaxed text-cream/90"
          >
            Combinando procedimentos minuciosos de tratamento periodontal, plástica gengival estética e técnicas cirúrgicas precisas, ofereço um atendimento personalizado, pautado pela ética, pelo conforto do paciente e por resultados naturais.
          </motion.p>

          <motion.div
            variants={sobreItemVariants}
            className="mt-10 flex flex-wrap gap-3"
          >
            {credenciais.map((c) => (
              <span
                key={c}
                className="inline-flex items-center gap-2 rounded-full border border-gold/30 px-4 py-2 text-xs text-cream/90"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                {c}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function AbordagemSection() {
  return (
    <section id="atendimento" className="bg-sand px-6 py-24 font-sans md:px-10 md:py-36">
      <div className="mx-auto max-w-5xl text-center">
        <span className="mb-3 inline-block text-[0.65rem] font-bold uppercase tracking-[0.35em] text-gold-deep">
          METODOLOGIA & CUIDADO
        </span>
        <h2 className="mx-auto max-w-3xl font-sans text-3xl font-bold leading-[1.18] tracking-tight text-deep sm:text-4xl md:text-5xl">
          Como funciona o seu <br className="hidden sm:inline" />
          <span className="font-serif italic font-normal text-gold-deep">atendimento periodontal</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#525f61] md:text-lg">
          Tratamento conduzido com precisão e clareza para você saber exatamente <strong className="font-semibold text-deep">o que esperar de cada etapa</strong>.
        </p>

        <div className="mt-16 grid gap-8 text-left md:grid-cols-3">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-3xl border border-deep/10 bg-white/90 p-8 shadow-sm transition hover:shadow-md"
          >
            <span className="text-sm font-bold text-gold-deep">Passo 1</span>
            <h3 className="mt-3 font-sans text-lg font-bold text-deep">Avaliação Periodontal</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#525f61]">
              Exame minuciosos da gengiva e estruturas de suporte, analisando <strong className="font-semibold text-deep">queixas de dor, retração ou sangramento</strong>.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-3xl border border-deep/10 bg-white/90 p-8 shadow-sm transition hover:shadow-md"
          >
            <span className="text-sm font-bold text-gold-deep">Passo 2</span>
            <h3 className="mt-3 font-sans text-lg font-bold text-deep">Planejamento & Tratamento</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#525f61]">
              Apresento o plano ideal — seja para <strong className="font-semibold text-deep">raspagem, plástica gengival ou enxerto</strong> —, com transparência e foco no conforto.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-3xl border border-deep/10 bg-white/90 p-8 shadow-sm transition hover:shadow-md"
          >
            <span className="text-sm font-bold text-gold-deep">Passo 3</span>
            <h3 className="mt-3 font-sans text-lg font-bold text-deep">Manutenção Preventiva</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#525f61]">
              Acompanhamento regular para garantir a <strong className="font-semibold text-deep">estabilidade dos tecidos periodontais</strong> e a beleza contínua do seu sorriso.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function BeneficiosSection() {
  return (
    <section className="bg-cream px-6 py-24 font-sans md:px-10 md:py-36">
      <div className="mx-auto max-w-5xl text-center">
        <span className="mb-3 inline-block text-[0.65rem] font-bold uppercase tracking-[0.35em] text-gold-deep">
          O QUE VOCÊ GANHA
        </span>
        <h2 className="mx-auto max-w-3xl font-sans text-3xl font-bold leading-[1.18] tracking-tight text-deep sm:text-4xl md:text-5xl">
          O que você conquista cuidando da <br className="hidden sm:inline" />
          <span className="font-serif italic font-normal text-gold-deep">sua gengiva</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#525f61] md:text-lg">
          Resultados que vão além da saúde bucal e <strong className="font-semibold text-deep">impactam diretamente sua autoestima</strong>.
        </p>

        <div className="mt-16 grid gap-8 text-left md:grid-cols-3">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-3xl border border-gold/25 bg-[#f5f0e8] p-8 shadow-sm transition hover:shadow-md"
          >
            <h3 className="font-sans text-lg font-bold text-deep">Preservação Dentária</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#525f61]">
              Gengivas saudáveis <strong className="font-semibold text-deep">evitam o amolecimento e a perda de dentes</strong> naturais ao longo dos anos.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-3xl border border-gold/25 bg-[#f5f0e8] p-8 shadow-sm transition hover:shadow-md"
          >
            <h3 className="font-sans text-lg font-bold text-deep">Estética & Proporção</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#525f61]">
              Alinhamento harmônico do contorno gengival, <strong className="font-semibold text-deep">valorizando a estética dos seus dentes</strong> ao sorrir.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-3xl border border-gold/25 bg-[#f5f0e8] p-8 shadow-sm transition hover:shadow-md"
          >
            <h3 className="font-sans text-lg font-bold text-deep">Hálito Renovado & Conforto</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#525f61]">
              Fim das infecções subgengivais e do desconforto, trazendo <strong className="font-semibold text-deep">segurança para conversar e sorrir</strong>.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServicosSection() {
  return <AppleCardsCarouselDemo />;
}

function FAQSection() {
  return <FAQSections items={faq.map((f) => ({ question: f.q, answer: f.a }))} />;
}

function CTASection() {
  return (
    <section className="relative overflow-hidden bg-deep px-6 py-24 font-sans md:px-10 md:py-32">
      <img
        src={heroRetrato.url}
        alt="Dra. Juliana"
        className="absolute inset-0 h-full w-full object-cover object-[70%_center] md:object-[75%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#07080a]/80 via-transparent to-[#07080a]/40 pointer-events-none" />

      <div className="relative z-10 mx-auto flex min-h-[420px] max-w-3xl items-end justify-center py-16 text-center md:min-h-[520px] md:py-24">
        <div className="max-w-md space-y-4">
          <p className="text-[0.65rem] uppercase tracking-[0.35em] text-gold/90">A base do seu sorriso merece cuidado</p>
          <h2 className="font-display text-2xl font-normal leading-tight text-white md:text-3xl">
            Agende sua consulta com a <span className="font-normal italic text-gold">Dra. Juliana</span>.
          </h2>
          <p className="text-sm leading-relaxed text-cream/80">
            Avaliação minuciosa, diagnóstico preciso e gengivas tratadas com o devido carinho.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex items-center gap-3 rounded-full border border-gold/40 bg-gold/10 px-8 py-4 text-white transition hover:border-gold hover:bg-gold/20"
          >
            Agendar consulta
            <ArrowUpRight className="h-4 w-4 text-gold" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <main>
      <Hero />
      <SobreSection />
      <GanchoSection />
      <ServicosSection />
      <AbordagemSection />
      <BeneficiosSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
