import type {ClinicConfig} from '../config/clinicConfig';

interface HowItWorksSectionProps {
  config: ClinicConfig;
}

export function HowItWorksSection({config}: HowItWorksSectionProps) {
  const {howItWorksSection} = config;

  return (
    <section
      id="como-funciona"
      className="border-y border-[#DFD8CC] bg-[#EFEAE1]/70 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-[#4B7F72]">
            {howItWorksSection.kicker}
          </p>
          <h2 className="mt-2 font-display text-2xl font-medium tracking-tight text-[#1B2A2F] sm:text-3xl">
            {howItWorksSection.title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#506268]">
            {howItWorksSection.subtitle}
          </p>
        </div>

        <ol className="mt-10 grid gap-6 md:grid-cols-3 md:gap-8">
          {howItWorksSection.steps.map((step) => (
            <li
              key={step.number}
              className="rounded-2xl border border-[#DFD8CC] bg-[#FAF8F5] p-6"
            >
              <span className="font-display text-2xl font-medium tabular-nums text-[#0F4C5C]">
                {step.number}.
              </span>
              <h3 className="mt-3 font-display text-lg font-medium text-[#1B2A2F]">
                {step.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[#506268]">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
