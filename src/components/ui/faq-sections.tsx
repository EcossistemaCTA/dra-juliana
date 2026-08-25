"use client";

import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export type FaqItem = {
  question: string;
  answer: string;
};

export function FAQSections({
  items,
  title = "Antes da primeira consulta.",
  eyebrow = "FAQ",
}: {
  items?: FaqItem[];
  title?: string;
  eyebrow?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = items ?? [
    {
      question: "Qual a idade ideal para começar o tratamento?",
      answer:
        "A primeira avaliação pode ser feita a partir dos 7 anos, quando é possível interceptar alterações do desenvolvimento. Para adultos não há idade limite: dá para alinhar o sorriso em qualquer fase da vida.",
    },
    {
      question: "Alinhador transparente serve para o meu caso?",
      answer:
        "Depende do diagnóstico. Na avaliação eu analiso mordida, espaço e objetivos, e indico entre aparelho fixo, ortopédico ou alinhador — sempre o que realmente faz sentido para você.",
    },
    {
      question: "Quanto tempo dura o tratamento?",
      answer:
        "Varia com a complexidade do caso, em média de 12 a 36 meses. Você recebe o planejamento com as etapas explicadas de forma clara desde o início.",
    },
    {
      question: "Como é a primeira consulta?",
      answer:
        "Conversamos sobre o que te incomoda, faço a avaliação clínica e apresento o plano de tratamento individualizado, com etapas, prazos e valores de forma transparente.",
    },
  ];

  return (
    <section className="bg-cream px-3 py-24 font-sans md:px-6 md:py-32">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center text-slate-800">
        <p className="text-base font-medium text-deep-soft">{eyebrow}</p>
        <h1 className="mt-2 font-display text-3xl font-semibold text-deep md:text-4xl">
          {title}
        </h1>
        <p className="mt-4 max-w-md text-sm text-deep-soft md:text-base">
          Dúvidas comuns antes de começar — tudo explicado com clareza para que você escolha o melhor caminho com segurança.
        </p>

        <div className="mt-6 flex w-full max-w-xl flex-col gap-4 text-left">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="flex w-full flex-col items-start">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between rounded-xl border border-deep/10 bg-white p-4 shadow-sm transition hover:border-gold/40"
                >
                  <h2 className="text-sm font-medium text-deep md:text-base">{faq.question}</h2>

                  <ChevronDown
                    className={cn(
                      "h-4 w-4 shrink-0 text-deep transition-all duration-500 ease-in-out",
                      isOpen && "rotate-180 text-gold-deep",
                    )}
                  />
                </button>

                <p
                  className={cn(
                    "w-full px-4 text-sm text-deep-soft transition-all duration-500 ease-in-out",
                    isOpen ? "max-h-[300px] translate-y-0 pt-4 opacity-100" : "max-h-0 -translate-y-2 opacity-0",
                  )}
                >
                  {faq.answer}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQSections;
