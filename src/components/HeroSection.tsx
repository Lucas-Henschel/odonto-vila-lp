import {ArrowRight} from 'lucide-react';
import type {ClinicConfig} from '../config/clinicConfig';
import {SafeImage} from './SafeImage';

interface HeroSectionProps {
  config: ClinicConfig;
  onBookClick: () => void;
}

export function HeroSection({config, onBookClick}: HeroSectionProps) {
  return (
    <section
      id="inicio"
      className="border-b border-[#DFD8CC] bg-[#FAF8F5] pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-14 lg:pb-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Coluna de conteúdo principal */}
          <div className="flex flex-col justify-center lg:col-span-6">
            <p className="text-sm font-medium text-[#4B7F72]">
              {config.demo.shortNotice}
            </p>

            <h1 className="mt-4 font-display text-[clamp(2.15rem,4.1vw,3.5rem)] leading-[1.12] font-medium tracking-tight text-[#1B2A2F]">
              {config.brand.heroHeadline}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#506268] sm:text-lg">
              {config.brand.heroSubtitle}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
              <button
                type="button"
                onClick={onBookClick}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#0F4C5C] px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#0A3844] whitespace-nowrap shrink-0 sm:text-base"
              >
                <span>{config.brand.heroPrimaryCta}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <a
                href="#servicos"
                className="inline-flex min-h-11 items-center justify-center rounded-lg px-2 py-2 text-sm font-semibold text-[#0F4C5C] underline underline-offset-4 transition-colors duration-150 hover:text-[#0A3844] whitespace-nowrap shrink-0"
              >
                {config.brand.heroSecondaryCta}
              </a>
            </div>

            <p className="mt-5 max-w-lg text-xs leading-relaxed text-[#506268] sm:text-sm">
              {config.brand.heroConfirmationNote}
            </p>
          </div>

          {/* Coluna visual principal */}
          <div className="lg:col-span-6">
            <div className="h-full overflow-hidden rounded-2xl border border-[#DFD8CC] bg-[#EFEAE1]">
              <SafeImage
                src={config.brand.heroImageSrc}
                alt={config.brand.heroImageAlt}
                fallbackTitle="Atendimento acolhedor — imagem demonstrativa"
                className="aspect-[4/3] h-full w-full object-cover lg:aspect-auto lg:min-h-[420px]"
              />
            </div>
          </div>
        </div>

        {/* Faixa de apoio horizontal em linha cheia */}
        <div className="mt-10 grid gap-4 border-t border-[#DFD8CC] pt-6 sm:grid-cols-3 sm:gap-8">
          {config.brand.heroHighlights.map((highlight, index) => (
            <div key={highlight} className="flex items-baseline gap-2.5">
              <span className="text-xs font-semibold tabular-nums text-[#4B7F72]">
                0{index + 1}.
              </span>
              <p className="text-sm font-medium text-[#1B2A2F]">{highlight}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
