import {useState} from 'react';
import {Menu, X} from 'lucide-react';
import type {ClinicConfig} from '../config/clinicConfig';

interface HeaderProps {
  config: ClinicConfig;
  onBookClick: () => void;
}

export function Header({config, onBookClick}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  const handlePrimaryAction = () => {
    setMobileMenuOpen(false);
    onBookClick();
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[#DFD8CC] bg-[#FAF8F5]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zona 1: Marca única em uma linha */}
        <a
          href="#inicio"
          className="font-display text-lg font-semibold tracking-tight text-[#0F4C5C] whitespace-nowrap shrink-0 sm:text-xl"
        >
          {config.brand.name}
        </a>

        {/* Zona 2: Links de navegação concisos em desktop */}
        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-7 md:flex"
        >
          {config.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#506268] underline-offset-4 transition-colors duration-150 hover:text-[#0F4C5C] hover:underline whitespace-nowrap shrink-0"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zona 3: Ação principal única */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={handlePrimaryAction}
            className="hidden min-h-10 items-center justify-center rounded-lg bg-[#0F4C5C] px-4 py-2 text-sm font-medium text-white transition-colors duration-150 hover:bg-[#0A3844] whitespace-nowrap shrink-0 sm:inline-flex"
          >
            {config.headerCtaLabel}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="menu-mobile"
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#DFD8CC] bg-white text-[#1B2A2F] transition-colors duration-150 hover:bg-[#EFEAE1] md:hidden"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Menu mobile acessível */}
      {mobileMenuOpen && (
        <div
          id="menu-mobile"
          className="border-t border-[#DFD8CC] bg-[#FAF8F5] px-4 py-4 md:hidden"
        >
          <nav aria-label="Menu para celular" className="flex flex-col gap-1">
            {config.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="flex min-h-11 items-center rounded-lg px-3 text-base font-medium text-[#1B2A2F] transition-colors hover:bg-[#EFEAE1]"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <button
                type="button"
                onClick={handlePrimaryAction}
                className="flex min-h-11 w-full items-center justify-center rounded-lg bg-[#0F4C5C] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#0A3844]"
              >
                {config.headerCtaLabel}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
