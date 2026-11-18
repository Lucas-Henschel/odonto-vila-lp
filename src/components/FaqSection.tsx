import {useState} from 'react';
import {ChevronDown} from 'lucide-react';
import type {ClinicConfig} from '../config/clinicConfig';

interface FaqSectionProps {
  config: ClinicConfig;
}

export function FaqSection({config}: FaqSectionProps) {
  const {faqSection} = config;
  const [openId, setOpenId] = useState<string | null>(faqSection.items[0]?.id ?? null);

  const toggleItem = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section
      id="duvidas"
      className="border-t border-[#DFD8CC] bg-[#FAF8F5] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="text-sm font-medium text-[#4B7F72]">
              {faqSection.kicker}
            </p>
            <h2 className="mt-2 font-display text-2xl font-medium tracking-tight text-[#1B2A2F] sm:text-3xl">
              {faqSection.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#506268]">
              {faqSection.subtitle}
            </p>

            <div className="mt-6 rounded-2xl border border-[#DFD8CC] bg-[#EFEAE1]/70 p-5">
              <p className="text-xs leading-relaxed text-[#1B2A2F] sm:text-sm">
                {faqSection.disclaimer}
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="divide-y divide-[#DFD8CC] rounded-2xl border border-[#DFD8CC] bg-white">
              {faqSection.items.map((item) => {
                const isOpen = openId === item.id;
                const buttonId = `faq-btn-${item.id}`;
                const panelId = `faq-panel-${item.id}`;

                return (
                  <div key={item.id}>
                    <h3>
                      <button
                        id={buttonId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => toggleItem(item.id)}
                        className="flex min-h-14 w-full items-center justify-between gap-4 px-6 py-4 text-left transition-colors duration-150 hover:bg-[#FAF8F5]"
                      >
                        <span className="font-sans text-sm font-semibold text-[#1B2A2F] sm:text-base">
                          {item.question}
                        </span>
                        <ChevronDown
                          className={`h-5 w-5 shrink-0 text-[#0F4C5C] transition-transform duration-200 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                    </h3>
                    {isOpen && (
                      <div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        className="px-6 pb-5 text-sm leading-relaxed text-[#506268]"
                      >
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
