//story.js:
export const story = {
  intro: [
    {
      sender: 'unknown',
      message: 'Olá.',
      delay: 1000
    },
    {
      sender: 'unknown',
      message: 'Meu nome é Maxwell. Sou detetive da polícia de Shadowvale.',
      delay: 2000
    },
    {
      sender: 'unknown',
      message: 'Estou investigando um caso de homicídio.',
      delay: 3000
    },
    {
      sender: 'unknown',
      message: 'Você foi a última pessoa a conversar com Isabella Martinez antes dela ser encontrada morta.',
      delay: 3500
    }
  ],
  chapter1: [
    {
      sender: 'maxwell',
      message: 'Os registros mostram que vocês conversaram por mais de uma hora na noite passada.',
      delay: 2500
    },
    {
      sender: 'maxwell',
      message: 'Você consegue explicar isso?',
      delay: 3000,
      choices: [
        'Eu não faço ideia de como isso aconteceu.',
        'Talvez alguém tenha usado meu telefone.',
        'Do que você está falando? Eu não a conheço.'
      ]
    }
  ],
  chapter2: [
    {
      sender: 'maxwell',
      message: 'Nunca ouviu falar dela? Tem certeza?',
      delay: 2000
    },
    {
      sender: 'maxwell',
      message: 'Porque, segundo os registros, vocês conversaram por mais de uma hora.',
      delay: 2500
    },
    {
      sender: 'maxwell',
      message: 'Quer tentar explicar isso?',
      delay: 2000
    },
    {
      sender: 'maxwell',
      message: '...',
      delay: 3000,
      choices: [
        'Eu não sei como meu número foi parar ali.',
        'Eu já disse, eu não a conheço!'
      ]
    }
  ],
  chapter3: [
    {
      sender: 'maxwell',
      message: 'Você não a conhece, mas ainda assim, ligou para ela.',
      delay: 2000
    },
    {
      sender: 'maxwell',
      message: 'Você acha que isso faz sentido?',
      delay: 2000
    },
    {
      sender: 'maxwell',
      message: '...',
      delay: 2000,
      choices: [
        'Eu não estou escondendo nada!',
        'Isso é uma grande confusão.',
        'Eu não vou continuar com isso.'
      ]
    }
  ],
  chapter4: [
    {
      sender: 'maxwell',
      message: 'Isso não ajuda sua situação.',
      delay: 2000
    },
    {
      sender: 'maxwell',
      message: 'Se não tem nada a esconder, prove!',
      delay: 2500
    },
    {
      sender: 'maxwell',
      message: 'Onde esteve ontem, entre 8:45 da noite?',
      delay: 3000
    },
    {
      sender: 'maxwell',
      message: '...',
      delay: 3000,
      choices: [
        'Eu já disse tudo que sei! Se não tiver provas contra mim, não volte a me contactar.',
        'Eu estava em casa, jogando com amigos.',
        'Não é da sua conta!'
      ]
    }
  ],
  chapter5: [
    {
      sender: 'maxwell',
      message: 'Não está se ajudando com esse tipo de resposta.',
      delay: 2000
    },
    {
      sender: 'maxwell',
      message: 'Melhor me falar a verdade.',
      delay: 2500
    },
    {
      sender: 'maxwell',
      message: 'Ou está dizendo que foi hackeado ou algo assim?',
      delay: 2000
    },
    {
      sender: 'maxwell',
      message: '...',
      delay: 3000,
      choices: [
        'Eu acho que sim, só pode ser isso.',
        'Não estou dizendo nada, só estou confuso.',
        'Já disse, não sei de nada.',
        'Estou falando a verdade, Sr. Agente.'
      ]
    }
  ],
  chapter5b: [
    {
      sender: 'maxwell',
      message: 'Algum dos seus amigos pode confirmar?',
      delay: 2000
    },
    {
      sender: 'maxwell',
      message: '...',
      delay: 3000,
      choices: [
        'Sim, pode perguntar para meu amigo Tomas ou vizinhos.',
        'Estive sozinho.'
      ]
    }
  ],
  chapter6: [
    {
      sender: 'maxwell',
      message: 'Tudo bem.',
      delay: 2000
    },
    {
      sender: 'maxwell',
      message: 'Obrigado pelo seu tempo.',
      delay: 2500
    },
    {
      sender: 'maxwell',
      message: 'Pode aguardar, porque vou prender você pelo que fez.',
      delay: 3000

    },
    {
      sender: 'maxwell',
      message: '...',
      delay: 3000,
      choices: [
        'Eu não estou escondendo nada!',
        'Você está me acusando sem provas!',
        'Fale com o meu advogado.'
      ]
    }
  ]
};