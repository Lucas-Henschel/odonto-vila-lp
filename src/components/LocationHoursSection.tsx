import {Check, Clock, Mail, MapPin, MessageCircle, Phone} from 'lucide-react';
import type {ClinicConfig} from '../config/clinicConfig';

interface LocationHoursSectionProps {
  config: ClinicConfig;
}

export function LocationHoursSection({config}: LocationHoursSectionProps) {
  const {locationSection} = config;

  return (
    <section
      id="localizacao"
      className="border-t border-[#DFD8CC] bg-[#FAF8F5] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-[#4B7F72]">
            {locationSection.kicker}
          </p>
          <h2 className="mt-2 font-display text-2xl font-medium tracking-tight text-[#1B2A2F] sm:text-3xl">
            {locationSection.title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#506268]">
            {locationSection.subtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          {/* Endereço, acesso e canais de contato */}
          <div className="rounded-2xl border border-[#DFD8CC] bg-white p-6 sm:p-8 lg:col-span-7">
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <div className="flex items-center gap-2 text-sm font-semibold text-[#0F4C5C]">
                  <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Endereço</span>
                </div>
                <p className="mt-3 text-sm font-medium text-[#1B2A2F]">
                  {locationSection.street}
                </p>
                <p className="mt-1 text-sm text-[#506268]">
                  {locationSection.neighborhoodAndCity}
                </p>
                <p className="mt-1 text-xs tabular-nums text-[#506268]">
                  {locationSection.postalCode}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-[#506268]">
                  {locationSection.referenceNote}
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-[#0F4C5C]">
                  Canais de atendimento
                </p>
                <ul className="mt-3 space-y-3 text-sm text-[#1B2A2F]">
                  <li className="flex items-center gap-2.5">
                    <Phone
                      className="h-4 w-4 shrink-0 text-[#4B7F72]"
                      aria-hidden="true"
                    />
                    <span className="tabular-nums">
                      {locationSection.contactPhoneDisplay}
                    </span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <MessageCircle
                      className="h-4 w-4 shrink-0 text-[#4B7F72]"
                      aria-hidden="true"
                    />
                    <span className="tabular-nums">
                      {locationSection.contactWhatsappDisplay}
                    </span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Mail
                      className="h-4 w-4 shrink-0 text-[#4B7F72]"
                      aria-hidden="true"
                    />
                    <span className="break-all">
                      {locationSection.contactEmailDisplay}
                    </span>
                  </li>
                  <li className="text-xs text-[#506268]">
                    Instagram: {locationSection.socialHandleDisplay}
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 border-t border-[#EFEAE1] pt-6">
              <p className="text-xs font-semibold text-[#1B2A2F]">
                Facilidades para sua chegada
              </p>
              <ul className="mt-3 grid gap-2.5 sm:grid-cols-1">
                {locationSection.accessHighlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-xs leading-relaxed text-[#506268] sm:text-sm"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#4B7F72]"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Horários de funcionamento */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#DFD8CC] bg-[#E9F1EE]/55 p-6 sm:p-8 lg:col-span-5">
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-[#0F4C5C]">
                <Clock className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>Horários de funcionamento</span>
              </div>

              <dl className="mt-5 divide-y divide-[#D5E2DD]">
                {locationSection.hours.map((row) => (
                  <div
                    key={row.days}
                    className="flex flex-col justify-between gap-1 py-3.5 sm:flex-row sm:items-center"
                  >
                    <dt className="text-sm font-medium text-[#1B2A2F]">
                      {row.days}
                    </dt>
                    <dd className="text-sm tabular-nums text-[#506268]">
                      {row.hours}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-6 border-t border-[#D5E2DD] pt-5">
              <p className="text-xs leading-relaxed text-[#506268]">
                Atendemos com hora marcada para evitar espera e dedicar atenção integral a cada consulta.
              </p>
              <a
                href="#agendamento"
                className="mt-3 inline-flex text-sm font-semibold text-[#0F4C5C] underline underline-offset-4 hover:text-[#0A3844]"
              >
                Solicitar horário pela recepção
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
