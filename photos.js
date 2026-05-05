/* ======================================
   Click Eterno — Manifesto de Fotos
   Para adicionar fotos: adicionar entrada aqui.
   ====================================== */

const PHOTO_DATA = [
    {
        category: 'casamento',
        label: 'Casamentos',
        photos: [
            { file: 'casamento-1.webp',  alt: 'Fotografia de casamento ao pôr do sol no Algarve' },
            { file: 'casamento-2.webp',  alt: 'Casal de noivos na Quinta do Lago, Algarve' },
            { file: 'casamento-3.webp',  alt: 'Sessão de casamento na Praia de Faro, Algarve' },
            { file: 'casamento-4.webp',  alt: 'Retrato de casal no dia do casamento em Olhão' },
            { file: 'casamento-5.webp',  alt: 'Fotografia de casamento com vista para o mar no Algarve' },
            { file: 'casamento-6.webp',  alt: 'Momento de casal após cerimónia de casamento no Algarve' },
            { file: 'casamento-7.webp',  alt: 'Ensaio pré-casamento na Ria Formosa, Olhão' },
            { file: 'casamento-8.webp',  alt: 'Casal de noivos na praia da Marinha, Algarve' },
            { file: 'casamento-9.webp',  alt: 'Detalhe de casamento com luz dourada do Algarve' },
            { file: 'casamento-10.webp', alt: 'Fotografia artística de casamento ao ar livre em Tavira' },
        ]
    },
    {
        category: 'gravidas',
        label: 'Grávidas',
        photos: [
            { file: 'gravidas-1.webp',  alt: 'Ensaio fotográfico de gestante na Praia da Falésia, Albufeira' },
            { file: 'gravidas-3.webp',  alt: 'Sessão de maternidade com luz natural na Praia da Marinha' },
            { file: 'gravidas-4.webp',  alt: 'Fotografia de grávida ao pôr do sol na Ria Formosa, Olhão' },
            { file: 'gravidas-5.webp',  alt: 'Ensaio gestante nas falésias de Albufeira, Algarve' },
            { file: 'gravidas-6.webp',  alt: 'Retrato de maternidade com luz dourada no Algarve' },
            { file: 'gravidas-7.webp',  alt: 'Sessão fotográfica de grávida na praia de Faro' },
            { file: 'gravidas-8.webp',  alt: 'Ensaio de gestante ao ar livre em Tavira, Algarve' },
            { file: 'gravidas-9.webp',  alt: 'Fotografia de maternidade na Praia do Barril, Ilha de Tavira' },
            { file: 'gravidas-10.webp', alt: 'Sessão de grávida com bokeh natural no Algarve' },
            { file: 'gravidas-11.webp', alt: 'Retrato emocional de gestante em Olhão, Portugal' },
            { file: 'gravidas-12.webp', alt: 'Ensaio fotográfico de maternidade com luz de fim de tarde no Algarve' },
            { file: 'gravidas-13.webp', alt: 'Fotografia de grávida na natureza em Loulé, Algarve' },
            { file: 'gravidas-14.webp', alt: 'Sessão de gestante na Praia de Armação de Pêra, Algarve' },
            { file: 'gravidas-15.webp', alt: 'Ensaio de maternidade junto ao mar no Algarve' },
        ]
    },
    {
        category: 'newborn',
        label: 'Recém-Nascidos',
        photos: [
            { file: 'newborn-1.webp',  alt: 'Ensaio fotográfico de recém-nascido com 7 dias em Olhão' },
            { file: 'newborn-3.webp',  alt: 'Sessão newborn com luz natural em estúdio no Algarve' },
            { file: 'newborn-4.webp',  alt: 'Fotografia de bebé recém-nascido em Faro, Portugal' },
            { file: 'newborn-5.webp',  alt: 'Registo fotográfico de recém-nascido com 10 dias em Olhão' },
            { file: 'newborn-6.webp',  alt: 'Ensaio newborn lifestyle no Algarve' },
            { file: 'newborn-7.webp',  alt: 'Fotografia de bebé adormecido em estúdio em Olhão' },
            { file: 'newborn-8.webp',  alt: 'Sessão de recém-nascido com família em Tavira, Algarve' },
            { file: 'newborn-9.webp',  alt: 'Retrato artístico de bebé recém-nascido no Algarve' },
            { file: 'newborn-10.webp', alt: 'Ensaio newborn com detalhes de pés e mãos em Olhão' },
            { file: 'newborn-11.webp', alt: 'Fotografia de recém-nascido com pais em Faro, Portugal' },
            { file: 'newborn-12.webp', alt: 'Sessão fotográfica de bebé com 14 dias no Algarve' },
            { file: 'newborn-13.webp', alt: 'Registo de nascimento com luz suave em estúdio no Algarve' },
        ]
    },
    {
        category: 'infantis',
        label: 'Infantil',
        photos: [
            { file: 'infantis-1.webp',  alt: 'Sessão fotográfica infantil na praia da Ria Formosa, Olhão' },
            { file: 'infantis-2.webp',  alt: 'Fotografia infantil ao ar livre na Ilha de Tavira' },
            { file: 'infantis-4.webp',  alt: 'Ensaio infantil com luz dourada em Olhão, Algarve' },
            { file: 'infantis-5.webp',  alt: 'Retrato de criança na Praia do Ancão, Algarve' },
            { file: 'infantis-6.webp',  alt: 'Fotografia de criança a brincar na praia de Faro' },
            { file: 'infantis-7.webp',  alt: 'Sessão infantil ao pôr do sol em Olhão, Portugal' },
            { file: 'infantis-8.webp',  alt: 'Ensaio fotográfico infantil no campo em Loulé, Algarve' },
            { file: 'infantis-9.webp',  alt: 'Fotografia de criança em jardim em Tavira, Algarve' },
            { file: 'infantis-10.webp', alt: 'Registo fotográfico infantil com brincadeiras em Olhão' },
            { file: 'infantis-11.webp', alt: 'Sessão de aniversário infantil no Algarve' },
            { file: 'infantis-12.webp', alt: 'Fotografia de criança com expressão natural em Faro' },
            { file: 'infantis-13.webp', alt: 'Ensaio infantil espontâneo na natureza do Algarve' },
        ]
    },
    {
        category: 'diadamae',
        label: 'Dia da Mãe',
        photos: [
            { file: 'diadamae-1.webp', alt: 'Ensaio fotográfico Dia da Mãe na Praia de Faro, Algarve' },
            { file: 'diadamae-2.webp', alt: 'Sessão especial mãe e filhos na Ria Formosa, Olhão' },
            { file: 'diadamae-3.webp', alt: 'Fotografia de mãe com bebé ao pôr do sol no Algarve' },
            { file: 'diadamae-4.webp', alt: 'Retrato emocional de mãe e filho em Tavira, Portugal' },
            { file: 'diadamae-5.webp', alt: 'Ensaio Dia da Mãe com luz natural em Olhão, Algarve' },
            { file: 'diadamae-6.webp', alt: 'Sessão fotográfica de mãe e filhos na praia do Algarve' },
        ]
    },
    {
        category: 'natal',
        label: 'Natal',
        photos: [
            { file: 'natal-1.webp',  alt: 'Ensaio fotográfico de Natal em família em Olhão, Algarve' },
            { file: 'natal-2.webp',  alt: 'Sessão natalícia com decoração festiva no Algarve' },
            { file: 'natal-3.webp',  alt: 'Fotografia de Natal com crianças em Faro, Portugal' },
            { file: 'natal-5.webp',  alt: 'Registo de Natal em família com ambiente aconchegante no Algarve' },
            { file: 'natal-6.webp',  alt: 'Ensaio natalício ao ar livre em Tavira, Algarve' },
            { file: 'natal-7.webp',  alt: 'Sessão de Natal com neve artificial em estúdio no Algarve' },
            { file: 'natal-8.webp',  alt: 'Fotografia de Natal com bebé em Olhão, Portugal' },
            { file: 'natal-9.webp',  alt: 'Registo fotográfico de Natal em família no Algarve' },
            { file: 'natal-10.webp', alt: 'Ensaio de Natal com crianças e decoração em Loulé' },
            { file: 'natal-11.webp', alt: 'Sessão natalícia especial em estúdio em Faro, Algarve' },
            { file: 'natal-12.webp', alt: 'Fotografia de Natal com pinheiro em família no Algarve' },
            { file: 'natal-13.webp', alt: 'Registo de Natal em Olhão com luz quente de velas' },
            { file: 'natal-14.webp', alt: 'Ensaio fotográfico de Natal com tradições portuguesas' },
            { file: 'natal-15.webp', alt: 'Sessão de Natal com bebé recém-nascido no Algarve' },
            { file: 'natal-16.webp', alt: 'Fotografia natalícia de família numerosa em Tavira' },
            { file: 'natal-17.webp', alt: 'Registo fotográfico especial de Natal em Olhão' },
            { file: 'natal-18.webp', alt: 'Ensaio de Natal ao ar livre em Faro, Portugal' },
            { file: 'natal-19.webp', alt: 'Sessão de Natal com detalhes de presentes e decoração no Algarve' },
            { file: 'natal-20.webp', alt: 'Fotografia de Natal em família com lareira em Loulé' },
            { file: 'natal-21.webp', alt: 'Registo natalício com expressões genuínas em Olhão' },
            { file: 'natal-22.webp', alt: 'Ensaio fotográfico de Natal minimalista no Algarve' },
            { file: 'natal-23.webp', alt: 'Sessão de Natal com filhos pequenos em Tavira, Portugal' },
            { file: 'natal-24.webp', alt: 'Fotografia de Natal com avós e netos em Olhão, Algarve' },
            { file: 'natal-25.webp', alt: 'Registo de Natal com momentos espontâneos em Faro' },
            { file: 'natal-26.webp', alt: 'Ensaio natalício especial em jardim no Algarve' },
            { file: 'natal-27.webp', alt: 'Sessão de Natal com família em ambiente natural em Tavira' },
        ]
    },
    {
        category: 'portrait',
        label: 'Retratos',
        photos: [
            { file: 'portrait-2.webp',  alt: 'Retrato profissional com luz natural no centro histórico de Olhão' },
            { file: 'portrait-3.webp',  alt: 'Sessão de retratos artísticos em Faro, Algarve' },
            { file: 'portrait-4.webp',  alt: 'Fotografia de retrato com bokeh suave em Tavira, Portugal' },
            { file: 'portrait-5.webp',  alt: 'Retrato feminino com luz dourada do Algarve ao fim do dia' },
            { file: 'portrait-6.webp',  alt: 'Sessão de retratos em ambiente urbano de Olhão' },
            { file: 'portrait-7.webp',  alt: 'Fotografia de retrato profissional ao ar livre em Faro' },
            { file: 'portrait-8.webp',  alt: 'Ensaio de retratos com luz natural na Ria Formosa' },
            { file: 'portrait-9.webp',  alt: 'Retrato artístico com expressão genuína em Olhão, Algarve' },
            { file: 'portrait-10.webp', alt: 'Sessão fotográfica de retrato em Tavira, Portugal' },
            { file: 'portrait-11.webp', alt: 'Fotografia de retrato com fundo desfocado em Loulé, Algarve' },
        ]
    },
    {
        category: 'aniversario',
        label: 'Eventos',
        photos: [
            { file: 'aniversario-festa-e-eventos-1.webp', alt: 'Fotografia de festa de primeiro aniversário em Olhão, Algarve' },
            { file: 'aniversario-festa-e-eventos-2.webp', alt: 'Registo fotográfico de aniversário em família em Faro, Portugal' },
            { file: 'aniversario-festa-e-eventos-3.webp', alt: 'Sessão fotográfica de evento infantil no Algarve' },
            { file: 'aniversario-festa-e-eventos-4.webp', alt: 'Fotografia profissional de festa de aniversário em Tavira' },
            { file: 'aniversario-festa-e-eventos-5.webp', alt: 'Registo de celebração especial em família no Algarve' },
        ]
    },
];
