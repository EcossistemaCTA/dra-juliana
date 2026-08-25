"use client";

import { Card, Carousel, type CarouselItem } from "@/components/ui/apple-cards-carousel";
import aparelhoFixoImg from "@/assets/aparelho-fixo.jpg";
import alinhadoresImg from "@/assets/alinhadores.jpg";
import ortopedistaImg from "@/assets/ortopedista.jpg";
import diagnosticoImg from "@/assets/diagnostico.jpg";
import interceptacaoImg from "@/assets/interceptacao.jpg";
import manutencaoImg from "@/assets/manutencao.jpg";

const treatmentContent = (
  title: string,
  description: string,
  items: string[],
) => (
  <div className="space-y-8">
    <div className="rounded-[1.75rem] bg-cream p-6 md:p-8">
      <p className="text-sm font-medium uppercase tracking-[0.22em] text-gold-deep">Tratamento</p>
      <h4 className="mt-3 font-display text-3xl text-deep md:text-4xl">{title}</h4>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-deep-soft">{description}</p>
    </div>

    <div className="grid gap-4 md:grid-cols-3">
      {items.map((item) => (
        <div key={item} className="rounded-2xl border border-deep/10 bg-sand p-4 text-sm leading-relaxed text-deep-soft">
          {item}
        </div>
      ))}
    </div>
  </div>
);

const data: CarouselItem[] = [
  {
    category: "Periodontite & Gengivite",
    title: "Saúde e sustentação",
    src: aparelhoFixoImg,
    content: treatmentContent(
      "Tratamento de Gengivite e Periodontite",
      "Interrupção do processo inflamatório e infeccioso das gengivas, preservando a sustentação óssea e a saúde dos dentes naturais.",
      [
        "Raspagem e alisamento radicular com técnicas minimamente invasivas.",
        "Controle rigoroso do sangramento e retração da gengiva.",
        "Orientações personalizadas de higienização preventiva.",
      ],
    ),
  },
  {
    category: "Estética Gengival",
    title: "Harmonia do sorriso",
    src: alinhadoresImg,
    content: treatmentContent(
      "Plástica Gengival (Gengivoplastia)",
      "Remodelagem estética da gengiva para alinhar o contorno dos dentes e corrigir o excesso gengival ao sorrir.",
      [
        "Correção do sorriso gengival de forma natural e simétrica.",
        "Valorização do formato e tamanho dos dentes.",
        "Procedimento preciso com recuperação tranquila e previsível.",
      ],
    ),
  },
  {
    category: "Recobrimento Radicular",
    title: "Proteção e enxerto",
    src: ortopedistaImg,
    content: treatmentContent(
      "Enxerto Gengival",
      "Tratamento cirúrgico para cobrir raízes expostas, protegendo contra a sensibilidade e prevenindo a evolução da retração.",
      [
        "Recobrimento de raízes expostas por retração gengival.",
        "Eliminação da sensibilidade ao frio, quente e ao toque.",
        "Reforço da espessura da gengiva para maior proteção.",
      ],
    ),
  },
  {
    category: "Implantes Dentários",
    title: "Cuidado peri-implantar",
    src: diagnosticoImg,
    content: treatmentContent(
      "Tratamento da Peri-implantite",
      "Prevenção e controle da inflamação ao redor de implantes, garantindo a sustentação e longevidade da prótese.",
      [
        "Descontaminação criteriosa dos implantes.",
        "Preservação da estrutura óssea peri-implantar.",
        "Manutenção da estabilidade e funcionalidade da mastigação.",
      ],
    ),
  },
  {
    category: "Reabilitação",
    title: "Preparo cirúrgico",
    src: interceptacaoImg,
    content: treatmentContent(
      "Aumento de Coroa Clínica",
      "Ajuste cirúrgico gengival e ósseo necessário para viabilizar restaurações, facetas ou a recuperação de dentes fraturados.",
      [
        "Exposição adequada do dente para tratamentos restauradores.",
        "Base segura para facetas, lentes e coroas.",
        "Harmonização da proporção entre dente e gengiva.",
      ],
    ),
  },
  {
    category: "Prevenção",
    title: "Longevidade do sorriso",
    src: manutencaoImg,
    content: treatmentContent(
      "Manutenção Periodontal Preventiva",
      "Acompanhamento periódico para higienização profunda, monitoramento dos tecidos e preservação da saúde bucal a longo prazo.",
      [
        "Consultas regulares de controle e raspagem preventiva.",
        "Manutenção dos resultados obtidos nos tratamentos.",
        "Proteção contínua contra novas inflamações e perdas ósseas.",
      ],
    ),
  },
];

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => <Card key={card.title} card={card} index={index} />);

  return (
    <section id="tratamentos" className="bg-sand px-6 py-24 font-sans md:px-10 md:py-36">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <span className="mb-3 inline-block text-[0.65rem] font-bold uppercase tracking-[0.35em] text-gold-deep">
            ESPECIALIDADES & TRATAMENTOS
          </span>
          <h2 className="mx-auto max-w-3xl font-sans text-3xl font-bold leading-[1.18] tracking-tight text-deep sm:text-4xl md:text-5xl">
            Periodontia pensada para a <br className="hidden sm:inline" />
            <span className="font-serif italic font-normal text-gold-deep">saúde e beleza</span> do seu sorriso.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#525f61] md:text-lg">
            Diagnóstico detalhado, plástica gengival e <strong className="font-semibold text-deep">tratamentos sob medida</strong> para prevenir, tratar e preservar a sustentação dos seus dentes.
          </p>
        </div>

        <div className="mt-16">
          <Carousel items={cards} />
        </div>
      </div>
    </section>
  );
}
