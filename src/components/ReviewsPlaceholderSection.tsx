import type {ClinicConfig} from '../config/clinicConfig';

interface ReviewsPlaceholderSectionProps {
  config: ClinicConfig;
}

export function ReviewsPlaceholderSection({config}: ReviewsPlaceholderSectionProps) {
  const {reviewsSection} = config;

  return (
    <section
      id="compromisso"
      className="border-t border-[#DFD8CC] bg-[#FAF8F5] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-[#4B7F72]">
            {reviewsSection.kicker}
          </p>
          <h2 className="mt-2 font-display text-2xl font-medium tracking-tight text-[#1B2A2F] sm:text-3xl">
            {reviewsSection.title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#506268]">
            {reviewsSection.subtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reviewsSection.pillars.map((pillar) => (
            <article
              key={pillar.id}
              className="rounded-2xl border border-[#DFD8CC] bg-white p-6"
            >
              <span className="font-display text-xl font-medium tabular-nums text-[#4B7F72]">
                {pillar.number}.
              </span>
              <h3 className="mt-3 font-display text-lg font-medium text-[#1B2A2F]">
                {pillar.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[#506268]">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
