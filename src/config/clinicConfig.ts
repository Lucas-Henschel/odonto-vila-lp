export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  summary: string;
  details: string;
}

export interface HowItWorksStep {
  number: string;
  title: string;
  description: string;
}

export interface TeamMember {
  id: string;
  name: string;
  specialty: string;
  registry: string;
  imageSrc: string;
  imageAlt: string;
}

export interface FacilityHighlight {
  id: string;
  kicker: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  aspectClass: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface HoursRow {
  days: string;
  hours: string;
}

export interface ClinicConfig {
  demo: {
    label: string;
    presenter: string;
    shortNotice: string;
    fullDisclaimer: string;
  };
  brand: {
    name: string;
    city: string;
    heroHeadline: string;
    heroSubtitle: string;
    heroPrimaryCta: string;
    heroSecondaryCta: string;
    heroConfirmationNote: string;
    heroHighlights: string[];
    heroImageSrc: string;
    heroImageAlt: string;
  };
  navigation: {
    label: string;
    href: string;
  }[];
  headerCtaLabel: string;
  whatsapp: {
    phoneNumber: string;
    messageHeader: string;
    confirmationReminder: string;
    preferredPeriods: string[];
  };
  servicesSection: {
    kicker: string;
    title: string;
    subtitle: string;
    items: ServiceItem[];
  };
  howItWorksSection: {
    kicker: string;
    title: string;
    subtitle: string;
    steps: HowItWorksStep[];
  };
  facilitySection: {
    kicker: string;
    title: string;
    subtitle: string;
    highlights: FacilityHighlight[];
  };
  teamSection: {
    kicker: string;
    title: string;
    subtitle: string;
    demoNote: string;
    members: TeamMember[];
  };
  reviewsSection: {
    kicker: string;
    title: string;
    subtitle: string;
    pillars: {
      id: string;
      number: string;
      title: string;
      description: string;
    }[];
  };
  faqSection: {
    kicker: string;
    title: string;
    subtitle: string;
    disclaimer: string;
    items: FaqItem[];
  };
  bookingSection: {
    kicker: string;
    title: string;
    subtitle: string;
    privacyNote: string;
    submitLabel: string;
  };
  locationSection: {
    kicker: string;
    title: string;
    subtitle: string;
    street: string;
    neighborhoodAndCity: string;
    postalCode: string;
    referenceNote: string;
    accessHighlights: string[];
    contactPhoneDisplay: string;
    contactWhatsappDisplay: string;
    contactEmailDisplay: string;
    socialHandleDisplay: string;
    hours: HoursRow[];
  };
  theme: {
    petrol: string;
    sage: string;
    warmWhite: string;
    sand: string;
  };
}

export const defaultClinicConfig: ClinicConfig = {
  demo: {
    label: 'Conceito demonstrativo',
    presenter: 'LG Business',
    shortNotice: 'Água Verde · Curitiba, PR',
    fullDisclaimer:
      'Consultório odontológico em Curitiba dedicado ao atendimento humanizado, prevenção e acompanhamento contínuo da saúde bucal.',
  },
  brand: {
    name: 'ODONTO VILA',
    city: 'Curitiba, Paraná',
    heroHeadline: 'Cuidado odontológico para acompanhar você em cada fase da vida',
    heroSubtitle:
      'Um espaço acolhedor pensado para explicar cada etapa com calma, ouvir suas dúvidas sem pressa e organizar sua consulta com transparência desde o primeiro contato.',
    heroPrimaryCta: 'Agendar avaliação',
    heroSecondaryCta: 'Conhecer serviços',
    heroConfirmationNote:
      'Horários solicitados pelo site passam por verificação de disponibilidade e confirmação da nossa equipe pelo WhatsApp.',
    heroHighlights: [
      'Atendimento com hora marcada',
      'Escuta atenta em cada consulta',
      'Confirmação prática pelo WhatsApp',
    ],
    heroImageSrc: '/src/assets/images/hero_atendimento_humano_1795008597922.jpg',
    heroImageAlt:
      'Cirurgiã-dentista da Odonto Vila conversando com paciente em mesa de madeira sob iluminação natural.',
  },
  navigation: [
    {label: 'Serviços', href: '#servicos'},
    {label: 'Equipe', href: '#equipe'},
    {label: 'Dúvidas', href: '#duvidas'},
    {label: 'Contato', href: '#localizacao'},
  ],
  headerCtaLabel: 'Agendar avaliação',
  whatsapp: {
    phoneNumber: '5541990000120',
    messageHeader: 'Pedido de agendamento — sujeito à confirmação',
    confirmationReminder:
      'Este envio inicia uma solicitação de horário. Sua consulta só é confirmada após retorno da nossa recepção.',
    preferredPeriods: ['Manhã', 'Tarde', 'Indiferente'],
  },
  servicesSection: {
    kicker: 'Áreas de atendimento',
    title: 'Especialidades e cuidados para toda a família',
    subtitle:
      'Cada plano de cuidado começa com uma avaliação presencial individualizada, respeitando o seu momento, conforto e objetivos.',
    items: [
      {
        id: 'avaliacao-odontologica',
        number: '01',
        title: 'Avaliação odontológica',
        category: 'Consulta inicial',
        summary:
          'Conversa inicial e exame clínico completo para compreender suas necessidades, revisar a saúde bucal e alinhar os próximos passos com clareza.',
        details: 'Recomendada para primeira visita, revisão periódica ou segunda opinião.',
      },
      {
        id: 'prevencao-e-limpeza',
        number: '02',
        title: 'Prevenção e limpeza',
        category: 'Cuidado contínuo',
        summary:
          'Profilaxia profissional, remoção de placa bacteriana e tártaro, além de orientações práticas adaptadas à sua rotina diária de higiene.',
        details: 'A periodicidade ideal é definida de acordo com o perfil de cada paciente.',
      },
      {
        id: 'restauracoes',
        number: '03',
        title: 'Restaurações',
        category: 'Dentística',
        summary:
          'Recuperação funcional e estética de dentes acometidos por cáries ou pequenas fraturas, com materiais selecionados caso a caso.',
        details: 'Indicação e planejamento definidos após exame clínico presencial.',
      },
      {
        id: 'tratamento-de-canal',
        number: '04',
        title: 'Tratamento de canal',
        category: 'Endodontia',
        summary:
          'Cuidado endodôntico conduzido com atenção ao conforto do paciente para preservar a estrutura dental quando a parte interna exige tratamento.',
        details: 'Todas as etapas são explicadas previamente antes do início do procedimento.',
      },
      {
        id: 'proteses',
        number: '05',
        title: 'Próteses',
        category: 'Reabilitação oral',
        summary:
          'Soluções fixas ou removíveis planejadas para devolver conforto na mastigação, segurança ao falar e equilíbrio ao sorriso.',
        details: 'Alternativas apresentadas de forma transparente após avaliação da arcada.',
      },
      {
        id: 'odontopediatria',
        number: '06',
        title: 'Odontopediatria',
        category: 'Infância e adolescência',
        summary:
          'Acompanhamento gentil voltado para crianças e adolescentes, em ambiente tranquilo, com linguagem lúdica e foco em prevenção desde cedo.',
        details: 'Respeitamos o tempo de adaptação e a confiança de cada criança.',
      },
    ],
  },
  howItWorksSection: {
    kicker: 'Como funciona',
    title: 'Agendamento simples, direto e sem complicações',
    subtitle:
      'Sem formulários longos. Você envia sua preferência de contato e combina o melhor horário diretamente com nossa recepção.',
    steps: [
      {
        number: '01',
        title: 'Envie seu pedido de horário',
        description:
          'Informe seu nome, telefone de contato, serviço de interesse opcional e o período do dia em que prefere ser atendido.',
      },
      {
        number: '02',
        title: 'Verificamos a disponibilidade',
        description:
          'Sua mensagem chega estruturada no WhatsApp da recepção para conferirmos os horários livres com o profissional adequado.',
      },
      {
        number: '03',
        title: 'Confirmamos juntos pelo WhatsApp',
        description:
          'Retornamos com as opções de dia e horário disponíveis. A consulta só é marcada após a sua confirmação.',
      },
    ],
  },
  facilitySection: {
    kicker: 'Nossa estrutura',
    title: 'Um consultório desenhado para trazer calma desde a chegada',
    subtitle:
      'Luz natural, madeira clara, tons suaves e consultórios silenciosos para que cada visita aconteça com tranquilidade e sem pressa.',
    highlights: [
      {
        id: 'recepcao',
        kicker: 'Recepção · Água Verde',
        title: 'Espera confortável e atendimento pontual',
        description:
          'Ambiente amplo, climatizado e organizado para que você aguarde em um espaço sereno antes de iniciar a consulta.',
        imageSrc: '/src/assets/images/estrutura_recepcao_vila_1795008599095.jpg',
        imageAlt:
          'Recepção da Odonto Vila com balcão em pedra natural, poltronas em azul-petróleo e plantas sob luz do dia.',
        aspectClass: 'aspect-[16/9]',
      },
      {
        id: 'consultorio',
        kicker: 'Consultórios',
        title: 'Salas claras e acolhedoras',
        description:
          'Consultórios iluminados com vista para área verde e espaço reservado para conversa prévia antes do atendimento clínico.',
        imageSrc: '/src/assets/images/estrutura_consultorio_luz_1795008598759.jpg',
        imageAlt:
          'Sala de atendimento da Odonto Vila com cadeira em tom areia, marcenaria clara e janela ampla para jardim.',
        aspectClass: 'aspect-[4/3]',
      },
      {
        id: 'familia',
        kicker: 'Atendimento familiar',
        title: 'Cuidado próximo para adultos e crianças',
        description:
          'Linguagem acessível para explicar cada etapa aos pais e criar experiências positivas para as crianças desde as primeiras visitas.',
        imageSrc: '/src/assets/images/cuidado_familia_sorriso_1795008600203.jpg',
        imageAlt:
          'Mãe e criança sorrindo juntas no espaço de espera iluminado da clínica.',
        aspectClass: 'aspect-[4/3]',
      },
    ],
  },
  teamSection: {
    kicker: 'Corpo clínico',
    title: 'Profissionais que acompanham o seu cuidado',
    subtitle:
      'Uma equipe multidisciplinar dedicada a atender com atenção, clareza técnica e respeito ao ritmo de cada paciente.',
    demoNote:
      'Atendimento realizado mediante agendamento prévio e avaliação presencial.',
    members: [
      {
        id: 'camila-ferreira',
        name: 'Dra. Camila Ferreira',
        specialty: 'Clínica Geral e Prevenção',
        registry: 'CRO-PR 90.001',
        imageSrc: '/src/assets/images/equipe_camila_ferreira_1795008885877.jpg',
        imageAlt: 'Retrato da Dra. Camila Ferreira, cirurgiã-dentista em clínica geral e prevenção.',
      },
      {
        id: 'rafael-nogueira',
        name: 'Dr. Rafael Nogueira',
        specialty: 'Endodontia e Restaurações',
        registry: 'CRO-PR 90.002',
        imageSrc: '/src/assets/images/equipe_rafael_clean_1795008901258.jpg',
        imageAlt: 'Retrato do Dr. Rafael Nogueira, cirurgião-dentista em endodontia e restaurações.',
      },
      {
        id: 'beatriz-alencar',
        name: 'Dra. Beatriz Alencar',
        specialty: 'Odontopediatria',
        registry: 'CRO-PR 90.003',
        imageSrc: '/src/assets/images/equipe_beatriz_clean_1795008901110.jpg',
        imageAlt: 'Retrato da Dra. Beatriz Alencar, cirurgiã-dentista em odontopediatria.',
      },
    ],
  },
  reviewsSection: {
    kicker: 'Nosso compromisso',
    title: 'Como conduzimos cada atendimento na Odonto Vila',
    subtitle:
      'Mais do que tratar dentes, cuidamos da forma como você se sente antes, durante e depois de cada visita ao consultório.',
    pillars: [
      {
        id: 'escuta',
        number: '01',
        title: 'Consultas sem pressa',
        description:
          'Reservamos tempo real na agenda para ouvir suas dúvidas, entender seu histórico em consulta e respeitar seu nível de conforto.',
      },
      {
        id: 'clareza',
        number: '02',
        title: 'Explicação em linguagem simples',
        description:
          'Apresentamos o que foi observado no exame e todas as alternativas de cuidado de forma direta, para você decidir com segurança.',
      },
      {
        id: 'continuidade',
        number: '03',
        title: 'Acompanhamento preventivo',
        description:
          'Priorizamos a prevenção e retornos periódicos planejados, mantendo a saúde bucal estável ao longo das diferentes fases da vida.',
      },
    ],
  },
  faqSection: {
    kicker: 'Dúvidas frequentes',
    title: 'Perguntas comuns antes da primeira consulta',
    subtitle:
      'Reunimos orientações práticas sobre como funciona o agendamento e o atendimento na clínica.',
    disclaimer:
      'Aviso importante: as respostas desta seção têm caráter informativo geral e não substituem uma avaliação odontológica presencial nem constituem diagnóstico individual.',
    items: [
      {
        id: 'faq-confirmacao',
        question: 'Ao enviar o formulário, meu horário já fica confirmado?',
        answer:
          'Não. O formulário prepara o seu pedido de agendamento para o WhatsApp. Nossa recepção confere a disponibilidade da equipe e retorna para confirmar com você o dia e a hora exatos.',
      },
      {
        id: 'faq-primeira-consulta',
        question: 'O que acontece na avaliação odontológica inicial?',
        answer:
          'Começamos com uma conversa tranquila sobre o que motivou sua visita, realizamos o exame clínico em consultório e explicamos com clareza as opções de cuidado mais indicadas para o seu caso.',
      },
      {
        id: 'faq-servicos-duvida',
        question: 'Não sei qual procedimento preciso. Posso enviar o pedido mesmo assim?',
        answer:
          'Sim. A escolha de serviço no formulário é opcional. Você pode deixar como “Avaliação inicial” e nossa equipe orienta o agendamento adequado.',
      },
      {
        id: 'faq-criancas',
        question: 'Vocês atendem crianças e adolescentes?',
        answer:
          'Sim. Contamos com atendimento em odontopediatria pensado para acolher crianças com calma, respeito ao ritmo de cada idade e orientação próxima aos responsáveis.',
      },
      {
        id: 'faq-dados',
        question: 'Preciso informar sintomas ou documentos no formulário do site?',
        answer:
          'Não. Solicitamos apenas nome, telefone para retorno e período de preferência. Qualquer informação clínica é conversada apenas em ambiente seguro durante a consulta.',
      },
    ],
  },
  bookingSection: {
    kicker: 'Agendamento via WhatsApp',
    title: 'Solicite sua avaliação com a nossa equipe',
    subtitle:
      'Preencha seus dados básicos para montar a mensagem de solicitação. Nossa recepção retorna pelo WhatsApp para combinar e confirmar o melhor horário.',
    privacyNote:
      'Não informe sintomas, histórico médico ou documentos neste formulário. Todas as informações clínicas são tratadas exclusivamente em consulta.',
    submitLabel: 'Preparar pedido no WhatsApp',
  },
  locationSection: {
    kicker: 'Localização e horários',
    title: 'Onde estamos no Água Verde, em Curitiba',
    subtitle:
      'Fácil acesso para quem vem da região central ou dos bairros vizinhos, com atendimento em horários planejados para a sua rotina.',
    street: 'Rua das Paineiras, 480 — Sala 204',
    neighborhoodAndCity: 'Água Verde · Curitiba, Paraná',
    postalCode: 'CEP 80240-000',
    referenceNote: 'Próximo à Av. República Argentina, com fácil acesso por transporte coletivo.',
    accessHighlights: [
      'Estacionamento conveniado no subsolo do edifício',
      'Acesso por elevador com acessibilidade desde a portaria',
      'Recepção térrea de apoio e confirmação prévia via WhatsApp',
    ],
    contactPhoneDisplay: '(41) 3000-0120',
    contactWhatsappDisplay: '(41) 99000-0120',
    contactEmailDisplay: 'contato@odontovila.com.br',
    socialHandleDisplay: '@odontovila.cwb',
    hours: [
      {days: 'Segunda a Sexta', hours: '08:30 às 18:30'},
      {days: 'Sábado', hours: '09:00 às 13:00'},
      {days: 'Domingo e Feriados', hours: 'Fechado'},
    ],
  },
  theme: {
    petrol: '#0F4C5C',
    sage: '#4B7F72',
    warmWhite: '#FAF8F5',
    sand: '#EFEAE1',
  },
};
