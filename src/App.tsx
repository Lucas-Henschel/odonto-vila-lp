/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {useRef, useState} from 'react';
import {BookingFormSection} from './components/BookingFormSection';
import {DemoConfigModal} from './components/DemoConfigModal';
import {FacilitySection} from './components/FacilitySection';
import {FaqSection} from './components/FaqSection';
import {Footer} from './components/Footer';
import {Header} from './components/Header';
import {HeroSection} from './components/HeroSection';
import {HowItWorksSection} from './components/HowItWorksSection';
import {LocationHoursSection} from './components/LocationHoursSection';
import {ReviewsPlaceholderSection} from './components/ReviewsPlaceholderSection';
import {ServicesSection} from './components/ServicesSection';
import {TeamSection} from './components/TeamSection';
import {defaultClinicConfig, type ClinicConfig} from './config/clinicConfig';

export default function App() {
  const [config, setConfig] = useState<ClinicConfig>(defaultClinicConfig);
  const [selectedService, setSelectedService] = useState('');
  const [isDemoConfigOpen, setIsDemoConfigOpen] = useState(false);
  const nameInputRef = useRef<HTMLInputElement | null>(null);

  const scrollToBookingForm = (serviceTitle?: string) => {
    if (serviceTitle !== undefined) {
      setSelectedService(serviceTitle);
    }
    const target = document.getElementById('agendamento');
    if (target) {
      target.scrollIntoView({behavior: 'smooth', block: 'start'});
      window.setTimeout(() => {
        nameInputRef.current?.focus({preventScroll: true});
      }, 450);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1B2A2F]">
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-[#0F4C5C] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Ir para o conteúdo principal
      </a>

      <Header config={config} onBookClick={() => scrollToBookingForm()} />

      <main id="conteudo-principal">
        <HeroSection config={config} onBookClick={() => scrollToBookingForm()} />

        <ServicesSection
          config={config}
          onSelectService={(serviceTitle) => scrollToBookingForm(serviceTitle)}
        />

        <HowItWorksSection config={config} />

        <FacilitySection config={config} />

        <TeamSection config={config} />

        <ReviewsPlaceholderSection config={config} />

        <FaqSection config={config} />

        <BookingFormSection
          config={config}
          selectedService={selectedService}
          onSelectedServiceChange={setSelectedService}
          nameInputRef={nameInputRef}
          onOpenDemoConfig={() => setIsDemoConfigOpen(true)}
        />

        <LocationHoursSection config={config} />
      </main>

      <Footer
        config={config}
        onOpenDemoConfig={() => setIsDemoConfigOpen(true)}
      />

      <DemoConfigModal
        key={`${isDemoConfigOpen}-${config.brand.name}-${config.whatsapp.phoneNumber}`}
        isOpen={isDemoConfigOpen}
        config={config}
        onClose={() => setIsDemoConfigOpen(false)}
        onSave={setConfig}
        onReset={() => setConfig(defaultClinicConfig)}
      />
    </div>
  );
}
