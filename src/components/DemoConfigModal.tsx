import {useEffect, useState, type FormEvent} from 'react';
import {RotateCcw, X} from 'lucide-react';
import type {ClinicConfig} from '../config/clinicConfig';

interface DemoConfigModalProps {
  isOpen: boolean;
  config: ClinicConfig;
  onClose: () => void;
  onSave: (updated: ClinicConfig) => void;
  onReset: () => void;
}

export function DemoConfigModal({
  isOpen,
  config,
  onClose,
  onSave,
  onReset,
}: DemoConfigModalProps) {
  const [brandName, setBrandName] = useState(config.brand.name);
  const [whatsappNumber, setWhatsappNumber] = useState(config.whatsapp.phoneNumber);
  const [street, setStreet] = useState(config.locationSection.street);
  const [phoneDisplay, setPhoneDisplay] = useState(config.locationSection.contactPhoneDisplay);
  const [firstMemberName, setFirstMemberName] = useState(
    config.teamSection.members[0]?.name ?? '',
  );
  const [firstMemberRegistry, setFirstMemberRegistry] = useState(
    config.teamSection.members[0]?.registry ?? '',
  );

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const nextConfig: ClinicConfig = {
      ...config,
      brand: {
        ...config.brand,
        name: brandName.trim() || config.brand.name,
      },
      whatsapp: {
        ...config.whatsapp,
        phoneNumber: whatsappNumber.replace(/\D/g, ''),
      },
      locationSection: {
        ...config.locationSection,
        street: street.trim() || config.locationSection.street,
        contactPhoneDisplay:
          phoneDisplay.trim() || config.locationSection.contactPhoneDisplay,
      },
      teamSection: {
        ...config.teamSection,
        members: config.teamSection.members.map((member, idx) =>
          idx === 0
            ? {
                ...member,
                name: firstMemberName.trim() || member.name,
                registry: firstMemberRegistry.trim() || member.registry,
              }
            : member,
        ),
      },
    };

    onSave(nextConfig);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-config-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1B2A2F]/55 p-4 backdrop-blur-xs"
    >
      <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-[#DFD8CC] bg-[#FAF8F5] p-6 shadow-xl">
        <div className="flex items-start justify-between gap-4 border-b border-[#DFD8CC] pb-4">
          <div>
            <p className="text-xs font-medium text-[#4B7F72]">
              Configuração da clínica
            </p>
            <h2
              id="demo-config-title"
              className="mt-1 font-display text-xl font-medium text-[#1B2A2F]"
            >
              Personalizar informações do site
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar configuração"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#DFD8CC] bg-white text-[#1B2A2F] hover:bg-[#EFEAE1]"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <p className="mt-3 text-xs leading-relaxed text-[#506268]">
          Atualize temporariamente os dados exibidos no site para adaptar nome da clínica, WhatsApp de destino, endereço ou equipe durante a apresentação.
        </p>

        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <div>
            <label
              htmlFor="cfg-brand"
              className="block text-xs font-semibold text-[#1B2A2F]"
            >
              Nome da clínica
            </label>
            <input
              id="cfg-brand"
              type="text"
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
              className="mt-1 min-h-10 w-full rounded-lg border border-[#D4CCC0] bg-white px-3 py-2 text-sm text-[#1B2A2F]"
            />
          </div>

          <div>
            <label
              htmlFor="cfg-whatsapp"
              className="block text-xs font-semibold text-[#1B2A2F]"
            >
              WhatsApp de destino (DDI + DDD + número)
            </label>
            <input
              id="cfg-whatsapp"
              type="text"
              inputMode="numeric"
              value={whatsappNumber}
              onChange={(e) => setWhatsappNumber(e.target.value)}
              placeholder="Ex.: 5541990000120"
              className="mt-1 min-h-10 w-full rounded-lg border border-[#D4CCC0] bg-white px-3 py-2 text-sm tabular-nums text-[#1B2A2F]"
            />
          </div>

          <div>
            <label
              htmlFor="cfg-street"
              className="block text-xs font-semibold text-[#1B2A2F]"
            >
              Endereço principal
            </label>
            <input
              id="cfg-street"
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              className="mt-1 min-h-10 w-full rounded-lg border border-[#D4CCC0] bg-white px-3 py-2 text-sm text-[#1B2A2F]"
            />
          </div>

          <div>
            <label
              htmlFor="cfg-phone"
              className="block text-xs font-semibold text-[#1B2A2F]"
            >
              Telefone exibido
            </label>
            <input
              id="cfg-phone"
              type="text"
              value={phoneDisplay}
              onChange={(e) => setPhoneDisplay(e.target.value)}
              className="mt-1 min-h-10 w-full rounded-lg border border-[#D4CCC0] bg-white px-3 py-2 text-sm text-[#1B2A2F]"
            />
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label
                htmlFor="cfg-member-name"
                className="block text-xs font-semibold text-[#1B2A2F]"
              >
                Profissional 01 — Nome
              </label>
              <input
                id="cfg-member-name"
                type="text"
                value={firstMemberName}
                onChange={(e) => setFirstMemberName(e.target.value)}
                className="mt-1 min-h-10 w-full rounded-lg border border-[#D4CCC0] bg-white px-3 py-2 text-sm text-[#1B2A2F]"
              />
            </div>

            <div>
              <label
                htmlFor="cfg-member-reg"
                className="block text-xs font-semibold text-[#1B2A2F]"
              >
                Profissional 01 — Registro
              </label>
              <input
                id="cfg-member-reg"
                type="text"
                value={firstMemberRegistry}
                onChange={(e) => setFirstMemberRegistry(e.target.value)}
                className="mt-1 min-h-10 w-full rounded-lg border border-[#D4CCC0] bg-white px-3 py-2 text-sm text-[#1B2A2F]"
              />
            </div>
          </div>

          <div className="flex flex-col-reverse gap-2 border-t border-[#DFD8CC] pt-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={() => {
                onReset();
                onClose();
              }}
              className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-lg border border-[#DFD8CC] bg-white px-3.5 py-2 text-xs font-semibold text-[#506268] hover:bg-[#EFEAE1]"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Restaurar padrão</span>
            </button>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={onClose}
                className="min-h-10 rounded-lg px-4 py-2 text-xs font-semibold text-[#506268] hover:bg-[#EFEAE1]"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="min-h-10 rounded-lg bg-[#0F4C5C] px-5 py-2 text-xs font-semibold text-white hover:bg-[#0A3844]"
              >
                Aplicar alterações
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
