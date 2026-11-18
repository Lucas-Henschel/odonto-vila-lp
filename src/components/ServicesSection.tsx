import {ArrowUpRight} from 'lucide-react';
import type {ClinicConfig} from '../config/clinicConfig';

interface ServicesSectionProps {
  config: ClinicConfig;
  onSelectService: (serviceTitle: string) => void;
}

export function ServicesSection({config, onSelectService}: ServicesSectionProps) {
  const {servicesSection} = config;

  return (
    <section
      id="servicos"
      className="bg-[#FAF8F5] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-[#4B7F72]">
            {servicesSection.kicker}
          </p>
          <h2 className="mt-2 font-display text-2xl font-medium tracking-tight text-[#1B2A2F] sm:text-3xl lg:text-4xl">
            {servicesSection.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#506268]">
            {servicesSection.subtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-6">
          {servicesSection.items.map((service) => (
            <article
              key={service.id}
              className="flex flex-col justify-between rounded-2xl border border-[#DFD8CC] bg-white p-6 transition-colors duration-150 hover:border-[#4B7F72]"
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#506268]">
                  <span className="tabular-nums text-[#0F4C5C]">{service.number}</span>
                  <span aria-hidden="true">/</span>
                  <span>{service.category}</span>
                </div>

                <h3 className="mt-3 font-display text-xl font-medium text-[#1B2A2F]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#506268]">
                  {service.summary}
                </p>

                <p className="mt-4 border-t border-[#EFEAE1] pt-3 text-xs leading-relaxed text-[#506268]">
                  {service.details}
                </p>
              </div>

              <div className="mt-5 pt-1">
                <button
                  type="button"
                  onClick={() => onSelectService(service.title)}
                  className="inline-flex min-h-10 items-center gap-1.5 text-sm font-semibold text-[#0F4C5C] underline-offset-4 transition-colors duration-150 hover:text-[#0A3844] hover:underline whitespace-nowrap"
                >
                  <span>Solicitar avaliação</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
