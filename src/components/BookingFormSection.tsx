import {useEffect, useState, type FormEvent, type RefObject} from 'react';
import {Check, Copy, ExternalLink, Loader2, MessageSquare, ShieldCheck} from 'lucide-react';
import type {ClinicConfig} from '../config/clinicConfig';

interface BookingFormSectionProps {
  config: ClinicConfig;
  selectedService: string;
  onSelectedServiceChange: (service: string) => void;
  nameInputRef: RefObject<HTMLInputElement | null>;
  onOpenDemoConfig: () => void;
}

interface FormErrors {
  name?: string;
  phone?: string;
}

function formatBrazilianPhone(raw: string): string {
  const digits = raw.replace(/\D/g, '').slice(0, 11);
  if (digits.length === 0) return '';
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function BookingFormSection({
  config,
  selectedService,
  onSelectedServiceChange,
  nameInputRef,
  onOpenDemoConfig,
}: BookingFormSectionProps) {
  const {bookingSection, whatsapp, servicesSection, brand} = config;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredPeriod, setPreferredPeriod] = useState(
    whatsapp.preferredPeriods[0] ?? 'Manhã',
  );
  const [errors, setErrors] = useState<FormErrors>({});
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedMessage, setGeneratedMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setGeneratedMessage(null);
    }
  }, [selectedService]);

  const cleanWhatsappNumber = whatsapp.phoneNumber.replace(/\D/g, '');
  const hasConfiguredWhatsapp = cleanWhatsappNumber.length >= 10;

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    const trimmedName = name.trim();
    const phoneDigits = phone.replace(/\D/g, '');

    if (trimmedName.length < 2) {
      nextErrors.name = 'Informe seu nome para identificar a solicitação.';
    }
    if (phoneDigits.length < 10 || phoneDigits.length > 11) {
      nextErrors.phone = 'Informe um telefone ou WhatsApp válido com DDD.';
    }

    return nextErrors;
  };

  const buildWhatsappMessage = (): string => {
    const chosenService = selectedService.trim() || 'Avaliação inicial (a definir com a equipe)';
    return [
      `${whatsapp.messageHeader}`,
      `Clínica: ${brand.name} — ${brand.city}`,
      `Nome: ${name.trim()}`,
      `Telefone: ${phone.trim()}`,
      `Serviço de interesse: ${chosenService}`,
      `Período preferido: ${preferredPeriod}`,
      '',
      'Olá! Gostaria de verificar a disponibilidade de horário para uma avaliação.',
    ].join('\n');
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsGenerating(true);
    setCopied(false);

    window.setTimeout(() => {
      const message = buildWhatsappMessage();
      setGeneratedMessage(message);
      setIsGenerating(false);
    }, 300);
  };

  const handleCopyMessage = async () => {
    if (!generatedMessage) return;
    try {
      await navigator.clipboard.writeText(generatedMessage);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const handleReset = () => {
    setGeneratedMessage(null);
    setCopied(false);
  };

  const whatsappUrl =
    hasConfiguredWhatsapp && generatedMessage
      ? `https://wa.me/${cleanWhatsappNumber}?text=${encodeURIComponent(generatedMessage)}`
      : null;

  return (
    <section
      id="agendamento"
      className="border-t border-[#DFD8CC] bg-[#EFEAE1]/65 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Coluna explicativa */}
          <div className="lg:col-span-5">
            <p className="text-sm font-medium text-[#0F4C5C]">
              {bookingSection.kicker}
            </p>
            <h2 className="mt-2 font-display text-2xl font-medium tracking-tight text-[#1B2A2F] sm:text-3xl lg:text-4xl">
              {bookingSection.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#506268]">
              {bookingSection.subtitle}
            </p>

            <div className="mt-6 rounded-2xl border border-[#DFD8CC] bg-[#FAF8F5] p-5">
              <div className="flex items-start gap-3">
                <ShieldCheck
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#4B7F72]"
                  aria-hidden="true"
                />
                <div className="space-y-2 text-xs leading-relaxed text-[#506268] sm:text-sm">
                  <p className="font-semibold text-[#1B2A2F]">
                    Atendimento sob confirmação
                  </p>
                  <p>{whatsapp.confirmationReminder}</p>
                  <p>{bookingSection.privacyNote}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário e mensagem pronta para WhatsApp */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#DFD8CC] bg-white p-6 sm:p-8">
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <label
                    htmlFor="booking-name"
                    className="block text-sm font-medium text-[#1B2A2F]"
                  >
                    Nome completo <span className="text-[#0F4C5C]">*</span>
                  </label>
                  <input
                    ref={nameInputRef}
                    id="booking-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors((prev) => ({...prev, name: undefined}));
                    }}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'booking-name-error' : undefined}
                    placeholder="Ex.: Mariana Oliveira"
                    className="mt-1.5 min-h-11 w-full rounded-lg border border-[#D4CCC0] bg-[#FAF8F5] px-3.5 py-2.5 text-sm text-[#1B2A2F] placeholder:text-[#7B8B90] transition-colors focus:border-[#0F4C5C] focus:bg-white focus:outline-none"
                  />
                  {errors.name && (
                    <p
                      id="booking-name-error"
                      role="alert"
                      className="mt-1.5 text-xs font-medium text-[#9B2C2C]"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="booking-phone"
                    className="block text-sm font-medium text-[#1B2A2F]"
                  >
                    Telefone / WhatsApp <span className="text-[#0F4C5C]">*</span>
                  </label>
                  <input
                    id="booking-phone"
                    name="phone"
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel"
                    required
                    value={phone}
                    onChange={(e) => {
                      setPhone(formatBrazilianPhone(e.target.value));
                      if (errors.phone) setErrors((prev) => ({...prev, phone: undefined}));
                    }}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? 'booking-phone-error' : undefined}
                    placeholder="(41) 99999-9999"
                    className="mt-1.5 min-h-11 w-full rounded-lg border border-[#D4CCC0] bg-[#FAF8F5] px-3.5 py-2.5 text-sm tabular-nums text-[#1B2A2F] placeholder:text-[#7B8B90] transition-colors focus:border-[#0F4C5C] focus:bg-white focus:outline-none"
                  />
                  {errors.phone && (
                    <p
                      id="booking-phone-error"
                      role="alert"
                      className="mt-1.5 text-xs font-medium text-[#9B2C2C]"
                    >
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="booking-service"
                    className="block text-sm font-medium text-[#1B2A2F]"
                  >
                    Serviço de interesse (opcional)
                  </label>
                  <select
                    id="booking-service"
                    name="service"
                    value={selectedService}
                    onChange={(e) => onSelectedServiceChange(e.target.value)}
                    className="mt-1.5 min-h-11 w-full rounded-lg border border-[#D4CCC0] bg-[#FAF8F5] px-3.5 py-2.5 text-sm text-[#1B2A2F] transition-colors focus:border-[#0F4C5C] focus:bg-white focus:outline-none"
                  >
                    <option value="">Ainda não defini / Avaliação inicial</option>
                    {servicesSection.items.map((service) => (
                      <option key={service.id} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>

                <fieldset>
                  <legend className="block text-sm font-medium text-[#1B2A2F]">
                    Período preferido para atendimento
                  </legend>
                  <div className="mt-2 grid grid-cols-3 gap-2 rounded-xl bg-[#EFEAE1] p-1">
                    {whatsapp.preferredPeriods.map((period) => {
                      const isSelected = preferredPeriod === period;
                      return (
                        <button
                          key={period}
                          type="button"
                          onClick={() => setPreferredPeriod(period)}
                          aria-pressed={isSelected}
                          className={`min-h-10 rounded-lg px-3 py-2 text-xs font-semibold transition-colors duration-150 whitespace-nowrap sm:text-sm ${
                            isSelected
                              ? 'bg-white text-[#0F4C5C] shadow-xs'
                              : 'text-[#506268] hover:text-[#1B2A2F]'
                          }`}
                        >
                          {period}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isGenerating}
                    className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#0F4C5C] px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#0A3844] disabled:cursor-not-allowed disabled:opacity-70 sm:text-base"
                  >
                    {isGenerating ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                        <span>Preparando mensagem...</span>
                      </>
                    ) : (
                      <>
                        <MessageSquare className="h-4 w-4" aria-hidden="true" />
                        <span>{bookingSection.submitLabel}</span>
                      </>
                    )}
                  </button>
                </div>
              </form>

              {generatedMessage && (
                <div
                  aria-live="polite"
                  className="mt-7 rounded-2xl border border-[#4B7F72]/40 bg-[#E9F1EE]/65 p-5 sm:p-6"
                >
                  <div className="flex flex-col justify-between gap-2 border-b border-[#C9DDD6] pb-3 sm:flex-row sm:items-center">
                    <p className="text-sm font-semibold text-[#0F4C5C]">
                      {whatsapp.messageHeader}
                    </p>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="self-start text-xs font-medium text-[#506268] underline underline-offset-4 hover:text-[#1B2A2F] sm:self-auto"
                    >
                      Editar dados
                    </button>
                  </div>

                  <p className="mt-3 text-xs leading-relaxed text-[#1B2A2F]">
                    Sua solicitação está pronta para envio. Após receber sua mensagem, nossa equipe verifica a agenda e confirma o horário com você pelo WhatsApp.
                  </p>

                  <pre className="mt-4 overflow-x-auto whitespace-pre-wrap rounded-xl border border-[#DFD8CC] bg-white p-4 font-sans text-xs leading-relaxed text-[#1B2A2F] sm:text-sm">
                    {generatedMessage}
                  </pre>

                  <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                    {whatsappUrl ? (
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#0F4C5C] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0A3844] whitespace-nowrap"
                      >
                        <span>Enviar pelo WhatsApp</span>
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      </a>
                    ) : (
                      <div className="w-full rounded-xl border border-[#DFD8CC] bg-[#FAF8F5] p-3.5 text-xs leading-relaxed text-[#506268]">
                        <p>
                          Nenhum número de WhatsApp configurado no momento. Copie o texto acima ou{' '}
                          <button
                            type="button"
                            onClick={onOpenDemoConfig}
                            className="font-semibold text-[#0F4C5C] underline underline-offset-2 hover:text-[#0A3844]"
                          >
                            defina um número de atendimento
                          </button>
                          .
                        </p>
                      </div>
                    )}

                    <button
                      type="button"
                      onClick={handleCopyMessage}
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[#0F4C5C] bg-white px-5 py-2.5 text-sm font-semibold text-[#0F4C5C] transition-colors hover:bg-[#FAF8F5] whitespace-nowrap"
                    >
                      {copied ? (
                        <>
                          <Check className="h-4 w-4 text-[#4B7F72]" aria-hidden="true" />
                          <span>Mensagem copiada</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" aria-hidden="true" />
                          <span>Copiar mensagem</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
