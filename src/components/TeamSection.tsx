import type {ClinicConfig} from '../config/clinicConfig';
import {SafeImage} from './SafeImage';

interface TeamSectionProps {
  config: ClinicConfig;
}

export function TeamSection({config}: TeamSectionProps) {
  const {teamSection} = config;

  return (
    <section
      id="equipe"
      className="border-t border-[#DFD8CC] bg-[#E9F1EE]/55 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#0F4C5C]">
              {teamSection.kicker}
            </p>
            <h2 className="mt-2 font-display text-2xl font-medium tracking-tight text-[#1B2A2F] sm:text-3xl">
              {teamSection.title}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#506268]">
              {teamSection.subtitle}
            </p>
          </div>
          <p className="max-w-xs text-xs leading-relaxed text-[#506268]">
            {teamSection.demoNote}
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {teamSection.members.map((member) => (
            <article
              key={member.id}
              className="overflow-hidden rounded-2xl border border-[#DFD8CC] bg-white"
            >
              <SafeImage
                src={member.imageSrc}
                alt={member.imageAlt}
                fallbackTitle={member.name}
                className="aspect-[3/4] w-full object-cover object-top"
              />

              <div className="p-6">
                <h3 className="font-display text-xl font-medium text-[#1B2A2F]">
                  {member.name}
                </h3>
                <p className="mt-1.5 text-sm font-medium text-[#0F4C5C]">
                  {member.specialty}
                </p>
                <p className="mt-3 border-t border-[#EFEAE1] pt-3 text-xs tabular-nums text-[#506268]">
                  {member.registry}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
