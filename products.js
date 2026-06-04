(function() {
  var PLACEHOLDER_DESC = 'Ficha completa próximamente. Compuesto de referencia para uso exclusivo en investigación científica.';

  window.CIENCIA_PRODUCTS = {
    'ghk-cu': {
      name: 'GHK-Cu',
      dose: '5 mg',
      image: 'images/ghk-cu-vial.png',
      alt: 'ciencia sana GHK-Cu vial',
      tags: [
        { label: 'Piel y colágeno', primary: true, color: '#5b2c87' },
        { label: 'GHK-Cu' },
        { label: 'Copper Tripeptide-1' }
      ],
      description: 'El GHK-Cu es un tripéptido natural presente en el plasma humano, estudiado por su papel en la regeneración celular, la síntesis de colágeno y la modulación de la respuesta inflamatoria.',
      batch: 'Q1 2025',
      priceOld: '$2,400.00',
      priceNew: '$2,000.00',
      verified: true,
      coas: [ { id: 'GHK-2025-Q1', meta: 'Q1 2025 · Pureza ≥99.4% · HPLC + MS' } ],
      specs: [
        'Tripéptido de cobre (Gly-His-Lys) de origen endógeno.',
        'Pureza mínima ≥99% verificada por HPLC.',
        'Liofilizado para investigación científica.',
        'Peso molecular: 340.4 g/mol.',
        'Soluble en agua estéril o solución bacteriostática.',
        'Almacenar a -20 °C protegido de luz y humedad.',
        'Exclusivamente para investigación científica en laboratorio.'
      ]
    },
    'bpc-157': {
      name: 'BPC-157', dose: '5 mg', image: 'images/bpc-157-vial.png', alt: 'ciencia sana BPC-157 vial',
      tags: [ { label: 'Recuperación', primary: true, color: '#a4c87a' } ],
      description: PLACEHOLDER_DESC, batch: 'Q1 2025', priceOld: '$2,400.00', priceNew: '$2,000.00', verified: true, coas: [],
      specs: [
        'Péptido sintético derivado de una proteína protectora gástrica.',
        'Pureza mínima ≥99% verificada por HPLC.',
        'Liofilizado para investigación científica.',
        'Compuesto por 15 aminoácidos.',
        'Peso molecular aproximado: 1,419 g/mol.',
        'Soluble en agua estéril o solución bacteriostática.',
        'Almacenar a -20 °C protegido de luz y humedad.',
        'Exclusivamente para investigación científica en laboratorio.'
      ]
    },
    'tb-500': {
      name: 'TB-500', dose: '5 mg', image: 'images/tb-500-vial.png', alt: 'ciencia sana TB-500 vial', zoom: 1.1,
      tags: [ { label: 'Regeneración', primary: true, color: '#234c39' } ],
      description: PLACEHOLDER_DESC, batch: 'Q1 2025', priceOld: '$3,000.00', priceNew: '$2,500.00', verified: true, coas: [],
      specs: [
        'Péptido sintético derivado de la proteína Thymosin Beta-4.',
        'Pureza mínima ≥99% verificada por HPLC.',
        'Liofilizado para investigación científica.',
        'Peso molecular aproximado: 4,963 g/mol.',
        'Soluble en agua estéril o solución bacteriostática.',
        'Almacenar a -20 °C protegido de luz y humedad.',
        'Exclusivamente para investigación científica en laboratorio.'
      ]
    },
    'retatrutide': {
      name: 'Retatrutide', dose: '5 mg', image: 'images/retatrutide-vial.png', alt: 'ciencia sana Retatrutide vial', zoom: 1.1,
      tags: [ { label: 'Control de peso', primary: true, color: '#1f2f9c' } ],
      description: PLACEHOLDER_DESC, batch: 'Q1 2025', priceOld: '$6,600.00', priceNew: '$5,500.00', verified: true, coas: [],
      specs: [
        'Péptido sintético agonista triple de los receptores GLP-1, GIP y glucagón.',
        'Pureza mínima ≥99% verificada por HPLC.',
        'Liofilizado para investigación científica.',
        'Peso molecular aproximado: 4,731 g/mol.',
        'Soluble en agua estéril o solución bacteriostática.',
        'Almacenar a -20 °C protegido de luz y humedad.',
        'Exclusivamente para investigación científica en laboratorio.'
      ]
    },
    'cjc-ipamorelin': {
      name: 'CJC & Ipamorelin', dose: '5 mg', image: 'images/cjc-ipamorelin-vial.png', alt: 'ciencia sana CJC & Ipamorelin vial',
      tags: [ { label: 'Estímulo de GH', primary: true, color: '#e0b327' } ],
      description: PLACEHOLDER_DESC, batch: 'Q1 2025', priceOld: '$3,000.00', priceNew: '$2,500.00', verified: true, coas: [],
      specs: [
        'Mezcla peptídica sintética compuesta por un análogo de GHRH (CJC-1295) y un agonista del receptor de grelina (Ipamorelin).',
        'Pureza mínima ≥99% verificada por HPLC.',
        'Liofilizado para investigación científica.',
        'Peso molecular combinado variable según formulación.',
        'Soluble en agua estéril o solución bacteriostática.',
        'Almacenar a -20 °C protegido de luz y humedad.',
        'Exclusivamente para investigación científica en laboratorio.'
      ]
    },
    'mots-c': {
      name: 'MOTS-c', dose: '5 mg', image: 'images/mots-c-vial.png', alt: 'ciencia sana MOTS-c vial', zoom: 1.1,
      tags: [ { label: 'Energía mitocondrial', primary: true, color: '#7a1f3d' } ],
      description: PLACEHOLDER_DESC, batch: 'Q1 2025', priceOld: '$6,000.00', priceNew: '$5,000.00', verified: true, coas: [],
      specs: [
        'Péptido mitocondrial derivado de ADN mitocondrial humano.',
        'Pureza mínima ≥99% verificada por HPLC.',
        'Liofilizado para investigación científica.',
        'Compuesto por 16 aminoácidos.',
        'Peso molecular aproximado: 2,174 g/mol.',
        'Soluble en agua estéril o solución bacteriostática.',
        'Almacenar a -20 °C protegido de luz y humedad.',
        'Exclusivamente para investigación científica en laboratorio.'
      ]
    },
    'nad': {
      name: 'NAD+', dose: '5 mg', image: 'images/nad-vial.png', alt: 'ciencia sana NAD+ vial', zoom: 1.1,
      tags: [ { label: 'Longevidad celular', primary: true, color: '#ef981c' } ],
      description: PLACEHOLDER_DESC, batch: 'Q1 2025', priceOld: '$3,600.00', priceNew: '$3,000.00', verified: true, coas: [],
      specs: [
        'Nicotinamida adenina dinucleótido (NAD+) de grado investigación.',
        'Pureza mínima ≥99% verificada por HPLC.',
        'Presentación liofilizada para investigación científica.',
        'Peso molecular: 663.4 g/mol.',
        'Cofactor biológico presente de forma natural en sistemas celulares.',
        'Almacenar a -20 °C protegido de luz, humedad y oxidación.',
        'Exclusivamente para investigación científica en laboratorio.'
      ]
    },
    'semax': {
      name: 'Semax', dose: '5 mg', image: 'images/semax-vial.png', alt: 'ciencia sana Semax vial', zoom: 1.1,
      tags: [ { label: 'Cognición y enfoque', primary: true, color: '#15a29f' } ],
      description: PLACEHOLDER_DESC, batch: 'Q1 2025', priceOld: '$3,000.00', priceNew: '$2,500.00', verified: true, coas: [],
      specs: [
        'Péptido sintético derivado de ACTH(4-10) modificado.',
        'Pureza mínima ≥99% verificada por HPLC.',
        'Liofilizado para investigación científica.',
        'Compuesto por 7 aminoácidos.',
        'Peso molecular aproximado: 813.9 g/mol.',
        'Soluble en agua estéril o solución bacteriostática.',
        'Almacenar a -20 °C protegido de luz y humedad.',
        'Exclusivamente para investigación científica en laboratorio.'
      ]
    },
    'lucid': {
      name: 'Lucid', dose: '60 cápsulas', image: 'images/lucid.png', alt: 'ciencia sana Lucid cápsulas',
      tags: [ { label: 'Sueño profundo', primary: true, color: '#2a2860' } ],
      description: PLACEHOLDER_DESC, batch: 'Q1 2025', priceOld: '$1,800.00', priceNew: '$1,500.00', verified: true, coas: []
    }
  };
})();
