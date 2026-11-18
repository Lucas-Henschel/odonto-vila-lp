import type {ClinicConfig} from '../config/clinicConfig';
import {SafeImage} from './SafeImage';

interface FacilitySectionProps {
  config: ClinicConfig;
}

export function FacilitySection({config}: FacilitySectionProps) {
  const {facilitySection} = config;
  const [featured, ...secondary] = facilitySection.highlights;

  return (
    <section
      id="estrutura"
      className="bg-[#FAF8F5] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-[#4B7F72]">
            {facilitySection.kicker}
          </p>
          <h2 className="mt-2 font-display text-2xl font-medium tracking-tight text-[#1B2A2F] sm:text-3xl lg:text-4xl">
            {facilitySection.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#506268]">
            {facilitySection.subtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          {featured && (
            <article className="overflow-hidden rounded-2xl border border-[#DFD8CC] bg-white lg:col-span-12">
              <div className="grid items-stretch lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <SafeImage
                    src={featured.imageSrc}
                    alt={featured.imageAlt}
                    fallbackTitle={featured.title}
                    className="aspect-[16/9] h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center p-6 sm:p-8 lg:col-span-5">
                  <p className="text-xs font-medium text-[#4B7F72]">
                    {featured.kicker}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-medium text-[#1B2A2F]">
                    {featured.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#506268] sm:text-base">
                    {featured.description}
                  </p>
                </div>
              </div>
            </article>
          )}

          {secondary.map((item) => (
            <article
              key={item.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-[#DFD8CC] bg-white lg:col-span-6"
            >
              <SafeImage
                src={item.imageSrc}
                alt={item.imageAlt}
                fallbackTitle={item.title}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="p-6">
                <p className="text-xs font-medium text-[#4B7F72]">{item.kicker}</p>
                <h3 className="mt-2 font-display text-xl font-medium text-[#1B2A2F]">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#506268]">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
