import type {ClinicConfig} from '../config/clinicConfig';

interface FooterProps {
  config: ClinicConfig;
  onOpenDemoConfig: () => void;
}

export function Footer({config, onOpenDemoConfig}: FooterProps) {
  return (
    <footer className="border-t border-[#DFD8CC] bg-[#1B2A2F] text-[#FAF8F5]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-xl font-semibold tracking-tight text-white">
              {config.brand.name}
            </p>
            <p className="mt-2 text-sm text-[#C8D4D8]">{config.brand.city}</p>
            <p className="mt-4 max-w-md text-xs leading-relaxed text-[#C8D4D8]">
              {config.demo.fullDisclaimer}
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-sm font-semibold text-white">Navegação</p>
            <ul className="mt-3 space-y-2 text-sm text-[#C8D4D8]">
              {config.navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="underline-offset-4 transition-colors hover:text-white hover:underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#agendamento"
                  className="underline-offset-4 transition-colors hover:text-white hover:underline"
                >
                  Agendar avaliação
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-sm font-semibold text-white">Contato</p>
            <ul className="mt-3 space-y-2 text-xs leading-relaxed text-[#C8D4D8]">
              <li>{config.locationSection.street}</li>
              <li>{config.locationSection.neighborhoodAndCity}</li>
              <li className="tabular-nums">
                Telefone: {config.locationSection.contactPhoneDisplay}
              </li>
              <li className="tabular-nums">
                WhatsApp: {config.locationSection.contactWhatsappDisplay}
              </li>
              <li>{config.locationSection.contactEmailDisplay}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-[#2E4249] pt-6 text-xs text-[#A7B8BE] sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {config.brand.name} · {config.brand.city}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <span>
              {config.demo.label} · {config.demo.presenter}
            </span>
            <button
              type="button"
              onClick={onOpenDemoConfig}
              className="text-xs text-[#C8D4D8] underline underline-offset-4 transition-colors hover:text-white"
            >
              Editar dados
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
