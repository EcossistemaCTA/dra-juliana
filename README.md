# Bem-Estar Psicológico: Dra. Giovanna Francini

Tá vendo o design e tals? você vai fazer identico pratcamente a mesma coisa, mas com a Dra. Giovanna Francini, coloque essa foto que estou te enviando na hero, o codigo de design que vc deve fazer identico é esse: import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import heroRetrato from "@/assets/tiago-hero.png.asset.json";
import logoTambani from "@/assets/logo-tambani.png.asset.json";
import sobreRetrato from "@/assets/tiago-sobre.png.asset.json";
import { LiquidButton } from "@/components";
import { Waves, CloudRain, Activity, HeartHandshake, Compass, BatteryLow, RefreshCw, Brain, Users, Repeat, Sparkles, ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";



const SITE_URL = "https://tiagotavares.psi.br";
const WHATSAPP_URL = "https://wa.me/5569000000000";

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#tiago`,
  name: "Tiago Oliveira Tavares",
  jobTitle: "Psicólogo · Terapia Cognitivo-Comportamental",
  url: SITE_URL,
  address: { "@type": "PostalAddress", addressLocality: "Porto Velho", addressRegion: "RO", addressCountry: "BR" },
  knowsAbout: [
    "Terapia Cognitivo-Comportamental",
    "Ansiedade",
    "Depressão",
    "Avaliação psicológica",
    "Neuropsicologia",
    "Psicologia do trânsito",
  ],
};

const faq = [
  {
    q: "Como funciona a Terapia Cognitivo-Comportamental?",
    a: "A TCC parte do princípio de que nossos pensamentos influenciam nossas emoções e comportamentos. Identificamos padrões de pensamento que causam sofrimento e desenvolvemos estratégias práticas para promover mudanças.",
  },
  {
    q: "Preciso estar em crise para começar a terapia?",
    a: "Não. A terapia é para quem sofre, mas também para quem deseja se compreender melhor, desenvolver inteligência emocional e investir em qualidade de vida.",
  },
  {
    q: "Quem pode ser atendido?",
    a: "Atendo adolescentes, adultos e idosos. Cada fase da vida tem desafios específicos e a terapia oferece espaço seguro para compreendê-los.",
  },
  {
    q: "Você realiza avaliações psicológicas?",
    a: "Sim: concursos públicos, cirurgia bariátrica, laqueadura e vasectomia, sempre com responsabilidade técnica e ética profissional.",
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
      { title: "Tiago Oliveira Tavares — Psicólogo | TCC em Porto Velho" },
      {
        name: "description",
        content:
          "Psicólogo há mais de 10 anos em Porto Velho (RO). Terapia Cognitivo-Comportamental e avaliação psicológica para adolescentes, adultos e idosos.",
      },
      { property: "og:title", content: "Tiago Oliveira Tavares — Psicólogo | TCC" },
      {
        property: "og:description",
        content:
          "Atendimento ético, acolhedor e baseado em evidências. Terapia Cognitivo-Comportamental e avaliações psicológicas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap",
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

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

function Hero() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end start"] });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], ["0px", "-40px"]);

  return (
    


      
        
        
      

      



      
        


          
            Psicólogo
          
          


            
              Tiago
              Oliveira Tavares
            
          



        




        


          
            Mais de 10 anos cuidando da saúde mental em Porto Velho. Terapia Cognitivo-Comportamental
            com escuta ética, acolhedora e baseada em evidências.
          

          
            
              
                
                  Agende
                
                
                  SUA SESSÃO
                
              
            
          

        



        
          
          Conheça a abordagem
        

        

        
          
        

      

      
        
          Deslize
        
        


          
        


      
    


  );
}

function SectionHeader({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    
      
        {index}
      
      
        {children}
      
    
  );
}

function GanchoSection() {
  const itens = [
    { icon: RefreshCw, b: "Vivendo no automático,", t: "sem tempo para cuidar de si." },
    { icon: Brain, b: "Carregando culpa,", t: "sobrecarga e autocobrança." },
    { icon: Users, b: "Dificuldade de se posicionar", t: "e estabelecer limites." },
    { icon: Repeat, b: "Repetindo padrões familiares", t: "que não fazem mais sentido." },
    { icon: Sparkles, b: "Se afastando de quem você é", t: "para atender expectativas externas." },
  ];

  const Item = ({ icon: Icon, b, t }: (typeof itens)[number]) => (
    
      
      


        {b}
        

        {t}
      


    
  );

  return (
    


      


        
          Você se sente assim?
        

        
          


            {itens.slice(0, 3).map((i) => (
              
            ))}
          


          


            {itens.slice(3).map((i) => (
              
            ))}
          



          
            Você não precisa continuar nesse ciclo.{" "}
            A psicoterapia pode ser o espaço seguro para se reconectar consigo, entender suas
            emoções e construir a vida que deseja, no seu tempo.
          

          
            
              Quero entender como funciona
              
            
          
        
      


    


  );
}




function SobreSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.12, 1.04, 1.12]);

  const credenciais = [
    "10+ anos de clínica",
    "TCC · Neuropsicologia",
    "Porto Velho — RO",
  ];

  return (
    


      
      




      


        
          
            02 — Quem sou
          

          
            Prazer, sou Tiago.
          

          
            Tenho 33 anos, sou natural de Porto Velho e psicólogo há mais de 10 anos. Dedico minha
            carreira a ajudar pessoas a compreenderem suas emoções e a enfrentarem desafios com mais
            equilíbrio.
          

          
            Atendimento ético, acolhedor e baseado em evidências — cada processo terapêutico é
            construído de forma individual, no seu tempo.
          


          
            {credenciais.map((c) => (
              


                
                {c}
              


            ))}
          
        
      


    


  );

}

function AbordagemSection() {
  const beneficios = [
    "Prática dentro da sua rotina",
    "Foco em resultados sustentáveis",
    "Acolhimento e escuta ativa",
    "Abordagem baseada em evidências",
  ];

  return (
    


      


        
          
            Terapia Cognitivo-Comportamental
          
          
            Uma abordagem prática, sensível e alinhada ao seu momento.
          
          
            Aqui a terapia é pensada para melhorar seu dia a dia, ajudando a transformar comportamento,
            emoções e relações com clareza e respeito.
          
        

        
          {beneficios.map((texto, idx) => (
            
              


                {idx + 1}
              


              


                {texto}
              


            
          ))}
        
      


    


  );
}


const avaliacoes = ["Concursos públicos", "Cirurgia bariátrica", "Laqueadura", "Vasectomia"];

function FAQSection() {
  return (
    


      


        
          Antes da primeira sessão.
        

        
          {faq.map((f, idx) => (
            
              
                
                  
                    {idx + 1}
                  
                  {f.q}
                
                
                  +
                
              
              


                


                  {f.a}
                


              


            
          ))}
        
      


    


  );
}

function CTASection() {
  return (
    


      


        
          
            Meu compromisso com você
          
          
            A psicoterapia é um
            

            processo de transformação.
          
          
            Meu objetivo é caminhar ao seu lado para que você compreenda melhor suas emoções,
            desenvolva novas formas de enfrentar os desafios da vida e alcance mais qualidade de
            vida. Se deseja iniciar esse processo, será um prazer acolhê-lo.
          
          
            
              Agendar sessão
              
                
              
            
          
          
            — Tiago Oliveira Tavares · Psicólogo
          
        
      


    


  );
}

const beneficios = [
  { b: "Clareza", t: "sobre o que sente e deseja." },
  { b: "Leveza", t: "para lidar com os desafios diários." },
  { b: "Posicionamento", t: "e limites saudáveis." },
  { b: "Ressignificação de padrões", t: "que bloqueiam seu crescimento." },
  { b: "Autoestima e confiança", t: "para decidir com segurança." },
];

function BeneficiosSection() {
  const Card = ({ b, t }: { b: string; t: string }) => (
    
      


        {b}{" "}
        {t}
      


    
  );

  return (
    


      


        
          O que a psicoterapia pode
          
 transformar na sua vida.
        

        
          Lista de benefícios:
        

        
          


            {beneficios.slice(0, 3).map((i) => (
              
            ))}
          


          


            {beneficios.slice(3).map((i) => (
              
            ))}
          


        
      


    


  );
}

const servicos = [
  {
    icon: HeartHandshake,
    t: "Psicoterapia individual",
    d: "Online e presencial. Um espaço seguro para compreender emoções, padrões e viver com mais equilíbrio.",
  },
  {
    icon: Waves,
    t: "Ansiedade",
    d: "Preocupações que não cessam, tensão constante e sintomas físicos como taquicardia, insônia e sensação de excesso de alerta.",
  },
  {
    icon: CloudRain,
    t: "Depressão",
    d: "Perda de energia, desânimo persistente e dificuldade de sentir prazer no que antes fazia sentido.",
  },
  {
    icon: Activity,
    t: "Transtornos do humor",
    d: "Oscilações intensas entre episódios de tristeza e euforia que impactam a rotina, o sono e as relações.",
  },
  {
    icon: Users,
    t: "Orientação familiar",
    d: "Apoio para melhorar a comunicação, fortalecer vínculos e atravessar desafios em conjunto.",
  },
  {
    icon: Compass,
    t: "Autoconhecimento",
    d: "Um espaço para compreender padrões, desenvolver inteligência emocional e fazer escolhas mais alinhadas com você.",
  },
  {
    icon: BatteryLow,
    t: "Estresse e esgotamento",
    d: "Cansaço que não passa, sobrecarga e sinais de burnout no trabalho e na vida pessoal.",
  },
  {
    icon: Brain,
    t: "Avaliação psicológica",
    d: "Laudos para concursos, cirurgia bariátrica, laqueadura e vasectomia, com rigor técnico e acolhimento.",
  },
  {
    icon: Repeat,
    t: "Relacionamentos",
    d: "Conflitos afetivos, familiares e dificuldades de comunicação que geram sofrimento recorrente.",
  },
];

function ServicosSection() {
  const scrollerRef = useRef(null);

  const scrollCards = (direction: number) => {
    if (!scrollerRef.current) return;

    const cardWidth = scrollerRef.current.firstElementChild?.clientWidth ?? 320;
    scrollerRef.current.scrollBy({
      left: direction * (cardWidth + 24),
      behavior: "smooth",
    });
  };

  return (
    


      


        
          Serviços oferecidos
        
        
          Apoio para ansiedade, depressão, relacionamentos, autoconhecimento e mais.
        

        


           scrollCards(-1)}
            aria-label="Ver cards anteriores"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-deep/10 bg-white text-deep shadow-sm transition hover:-translate-y-0.5 hover:border-gold/40 hover:text-gold-deep"
          >
            
          
           scrollCards(1)}
            aria-label="Ver próximos cards"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-deep/10 bg-white text-deep shadow-sm transition hover:-translate-y-0.5 hover:border-gold/40 hover:text-gold-deep"
          >
            
          
        



        
          {servicos.map(({ icon: Icon, t, d }) => (
            
              


                
              


              


                

{t}


                

{d}


                
                  Saber mais
                  
                
              


            
          ))}
        

        
          
            Avaliações psicológicas
          
          
            {avaliacoes.map((a) => (
              
                {a}
              
            ))}
          
          
            Atendimento para adolescentes, adultos e idosos.
          
        
      


    


  );
}

function Home() {
  return (
    
      
      
      
      
      
      
      
      
    
  );
}
 e tambem já coloque a logo da clinica tambani ali no lugar dela na hero que tambem ja estou enviando e estou enviando a que vai ficar na secao de quem sou : sobre.png

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/60727621-ea31-4c67-a849-b47f7ed5c608).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
