/**
 * NeuroPsynfonía — Guía de orientación: ¿Neurología o psiquiatría?
 * Embeber: <div id="guia-orientacion"></div>
 * Dependencia: Tabler Icons webfont (ver instrucciones al pie)
 */

(function () {
  const COLORS = {
    teal:       '#2AADB5',
    tealLight:  '#e6f6f7',
    tealDark:   '#1a7a80',
    rosa:       '#F272A0',
    rosaLight:  '#fdeef5',
    rosaDark:   '#b5186a',
    dorado:     '#F5C842',
    doradoLight:'#fdf6dc',
    doradoDark: '#8a6c00',
    oscuro:     '#1A3A3C',
    gris:       '#f4f4f2',
    grisBorde:  '#e0e0dc',
    texto:      '#1A3A3C',
    textoSec:   '#4a6669',
  };

  const datos = [
    {
      id: 'tdah',
      titulo: 'Dificultades de atención e hiperactividad (TDAH)',
      icono: 'ti-brain',
      color: COLORS.teal,
      colorLight: COLORS.tealLight,
      neuro: [
        'Sospecha de origen epiléptico (ausencias, episodios de desconexión)',
        'Evaluación neurológica previa al inicio de medicación estimulante',
        'Historial de trauma craneal, prematurez o daño neurológico',
        'Coexiste con torpeza motora significativa o regresión del desarrollo',
      ],
      psiq: [
        'Inatención, impulsividad o hiperactividad que afectan el rendimiento escolar y las relaciones',
        'Inicio del tratamiento farmacológico y seguimiento',
        'Presencia de ansiedad, labilidad emocional o baja tolerancia a la frustración',
        'Diagnóstico diferencial con otros trastornos del neurodesarrollo',
      ],
      conjunta: null,
    },
    {
      id: 'tea',
      titulo: 'Autismo (TEA) y alteraciones del neurodesarrollo',
      icono: 'ti-puzzle',
      color: COLORS.rosa,
      colorLight: COLORS.rosaLight,
      neuro: [
        'Regresión del desarrollo o pérdida de habilidades ya adquiridas',
        'Sospecha de epilepsia asociada',
        'Alteraciones motoras, hipotonía o marcha atípica',
        'Evaluación etiológica (genética, metabólica, neuroimagen)',
      ],
      psiq: [
        'Dificultades en comunicación social, juego y conducta sin regresión evidente',
        'Conductas desafiantes, autolesiones o rabietas intensas en el contexto del TEA',
        'Inicio o ajuste de tratamiento farmacológico conductual',
        'Evaluación diagnóstica inicial cuando el motivo es escolar o conductual',
      ],
      conjunta: 'En TEA con epilepsia, regresión o comorbilidades múltiples, la evaluación conjunta es la norma.',
    },
    {
      id: 'crisis',
      titulo: 'Crisis, episodios paroxísticos o pérdida de conciencia',
      icono: 'ti-activity',
      color: COLORS.teal,
      colorLight: COLORS.tealLight,
      neuro: [
        'Episodios de pérdida de conciencia, sacudidas o rigidez',
        'Ausencias o mirada fija repetitiva que interrumpen la actividad',
        'Movimientos involuntarios o posturas anómalas inexplicables',
        'Todo primer episodio de posible crisis epiléptica',
      ],
      psiq: [
        'Crisis de pánico con síntomas físicos intensos (palpitaciones, dificultad para respirar)',
        'Episodios disociativos (desconexión emocional, amnesia parcial, síntomas funcionales)',
        'Crisis de angustia en contexto de estrés, trauma o ansiedad severa',
      ],
      conjunta: 'Cuando la naturaleza del episodio no está clara, neurología descarta origen epiléptico antes de atribuir causa psiquiátrica.',
    },
    {
      id: 'sueno',
      titulo: 'Trastornos del sueño',
      icono: 'ti-moon',
      color: COLORS.rosa,
      colorLight: COLORS.rosaLight,
      neuro: [
        'Parasomnias complejas (sonambulismo con riesgo, terrores nocturnos frecuentes)',
        'Sospecha de epilepsia nocturna',
        'Movimientos anormales durante el sueño',
        'Hipersomnia severa o narcolepsia',
      ],
      psiq: [
        'Insomnio de conciliación o mantenimiento asociado a ansiedad o rumiación',
        'Alteración del sueño en contexto de depresión, TDAH o trastorno del ánimo',
        'Rechazo persistente a dormir solo con impacto en la dinámica familiar',
        'Pesadillas frecuentes vinculadas a experiencias traumáticas',
      ],
      conjunta: null,
    },
    {
      id: 'tics',
      titulo: 'Tics y síndrome de Tourette',
      icono: 'ti-refresh',
      color: COLORS.teal,
      colorLight: COLORS.tealLight,
      neuro: [
        'Tics motores y vocales complejos o de inicio reciente',
        'Diagnóstico y evaluación inicial del síndrome de Tourette',
        'Tics de aparición abrupta (descartar PANDAS/PANS)',
        'Consideración de tratamiento farmacológico neurológico',
      ],
      psiq: [
        'Tics con impacto emocional significativo, vergüenza o aislamiento social',
        'Comorbilidad con TDAH, TOC o ansiedad (muy frecuente en Tourette)',
        'Necesidad de intervención psicoeducativa o apoyo terapéutico',
      ],
      conjunta: 'El síndrome de Tourette con comorbilidades psiquiátricas frecuentemente requiere manejo coordinado entre ambas especialidades.',
    },
    {
      id: 'cefalea',
      titulo: 'Cefalea y dolor de cabeza recurrente',
      icono: 'ti-activity-heartbeat',
      color: COLORS.rosa,
      colorLight: COLORS.rosaLight,
      neuro: [
        'Cefalea recurrente, pulsátil o con aura (migraña)',
        'Dolor de cabeza de inicio reciente, progresivo o que despierta en la noche',
        'Cefalea asociada a síntomas neurológicos (vértigo, alteración visual, debilidad)',
        'Evaluación y manejo farmacológico de la migraña',
      ],
      psiq: [
        'Cefalea funcional sin causa orgánica identificada, asociada a estrés o ansiedad escolar',
        'Dolor de cabeza como expresión somática de depresión o ansiedad',
        'Cefalea que mejora en vacaciones o fines de semana',
      ],
      conjunta: 'La migraña con comorbilidad ansiosa o depresiva se beneficia de manejo compartido.',
    },
    {
      id: 'aprendizaje',
      titulo: 'Dificultades de aprendizaje',
      icono: 'ti-book',
      color: COLORS.teal,
      colorLight: COLORS.tealLight,
      neuro: [
        'Dificultades de aprendizaje en contexto de epilepsia tratada',
        'Regresión escolar inexplicable',
        'Sospecha de trastorno neurogenético o metabólico',
        'Evaluación cuando hay antecedentes de daño neurológico',
      ],
      psiq: [
        'Dislexia, discalculia u otros trastornos específicos del aprendizaje',
        'Dificultades escolares en el contexto de TDAH, ansiedad o depresión',
        'Orientación al colegio y solicitud de adecuaciones curriculares',
        'Diagnóstico diferencial entre trastorno del aprendizaje y problema emocional',
      ],
      conjunta: null,
    },
  ];

  const css = `
    #guia-orientacion * { box-sizing: border-box; }
    #guia-orientacion {
      font-family: 'Nunito Sans', 'Nunito', sans-serif;
      color: ${COLORS.texto};
      max-width: 860px;
      margin: 0 auto;
      padding: 0 0 2rem;
    }
    .np-guia-intro {
      font-size: 17px;
      color: ${COLORS.textoSec};
      line-height: 1.7;
      margin-bottom: 1.5rem;
    }
    .np-leyenda {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
      margin-bottom: 1.5rem;
    }
    .np-leyenda-item {
      display: flex;
      align-items: center;
      gap: 7px;
      font-size: 13px;
      color: ${COLORS.textoSec};
    }
    .np-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      flex-shrink: 0;
    }
    .np-card {
      background: #fff;
      border: 1px solid ${COLORS.grisBorde};
      border-radius: 14px;
      margin-bottom: 10px;
      overflow: hidden;
      transition: box-shadow 0.18s;
    }
    .np-card:hover {
      box-shadow: 0 2px 12px rgba(26,58,60,0.07);
    }
    .np-header {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 15px 18px;
      cursor: pointer;
      user-select: none;
      background: #fff;
      transition: background 0.15s;
    }
    .np-header:hover { background: ${COLORS.gris}; }
    .np-icono-wrap {
      width: 38px;
      height: 38px;
      border-radius: 9px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      font-size: 19px;
    }
    .np-titulo {
      font-size: 15px;
      font-weight: 700;
      color: ${COLORS.texto};
      flex: 1;
      line-height: 1.4;
    }
    .np-chevron {
      font-size: 17px;
      color: ${COLORS.textoSec};
      transition: transform 0.2s;
      flex-shrink: 0;
    }
    .np-chevron.abierto { transform: rotate(180deg); }
    .np-body {
      display: none;
      border-top: 1px solid ${COLORS.grisBorde};
    }
    .np-body.abierto { display: block; }
    .np-cols {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 600px) {
      .np-cols { grid-template-columns: 1fr; }
      .np-col:first-child { border-right: none; border-bottom: 1px solid ${COLORS.grisBorde}; }
    }
    .np-col { padding: 14px 18px; }
    .np-col:first-child { border-right: 1px solid ${COLORS.grisBorde}; }
    .np-badge {
      display: inline-block;
      font-size: 11px;
      font-weight: 700;
      padding: 3px 9px;
      border-radius: 5px;
      margin-bottom: 10px;
      letter-spacing: 0.01em;
    }
    .np-badge-neuro {
      background: ${COLORS.tealLight};
      color: ${COLORS.tealDark};
    }
    .np-badge-psiq {
      background: ${COLORS.rosaLight};
      color: ${COLORS.rosaDark};
    }
    .np-señal {
      display: flex;
      align-items: flex-start;
      gap: 7px;
      font-size: 13px;
      color: ${COLORS.textoSec};
      margin-bottom: 7px;
      line-height: 1.55;
    }
    .np-señal i { margin-top: 2px; flex-shrink: 0; font-size: 13px; }
    .np-nota {
      background: ${COLORS.doradoLight};
      border-radius: 0 0 13px 13px;
      padding: 10px 18px;
      font-size: 13px;
      color: ${COLORS.doradoDark};
      display: flex;
      align-items: flex-start;
      gap: 8px;
      line-height: 1.55;
    }
    .np-nota i { margin-top: 1px; flex-shrink: 0; }
  `;

  function señalesHTML(lista, colorFlecha) {
    return lista.map(s =>
      `<div class="np-señal"><i class="ti ti-arrow-right" style="color:${colorFlecha}" aria-hidden="true"></i><span>${s}</span></div>`
    ).join('');
  }

  function cardHTML(d) {
    return `
      <div class="np-card" id="np-card-${d.id}">
        <div class="np-header" onclick="npToggle('${d.id}')" role="button" aria-expanded="false" aria-controls="np-body-${d.id}">
          <div class="np-icono-wrap" style="background:${d.colorLight}">
            <i class="ti ${d.icono}" style="color:${d.color}" aria-hidden="true"></i>
          </div>
          <span class="np-titulo">${d.titulo}</span>
          <i class="ti ti-chevron-down np-chevron" id="np-chev-${d.id}" aria-hidden="true"></i>
        </div>
        <div class="np-body" id="np-body-${d.id}">
          <div class="np-cols">
            <div class="np-col">
              <span class="np-badge np-badge-neuro">La Dra. Badilla · Neurología pediátrica</span>
              ${señalesHTML(d.neuro, COLORS.tealDark)}
            </div>
            <div class="np-col">
              <span class="np-badge np-badge-psiq">La Dra. Cortés · Psiquiatría Infantil y Adolescente</span>
              ${señalesHTML(d.psiq, COLORS.rosaDark)}
            </div>
          </div>
          ${d.conjunta ? `<div class="np-nota"><i class="ti ti-info-circle" aria-hidden="true"></i><span>${d.conjunta}</span></div>` : ''}
        </div>
      </div>`;
  }

  window.npToggle = function (id) {
    const body = document.getElementById('np-body-' + id);
    const chev = document.getElementById('np-chev-' + id);
    const header = chev.closest('.np-header');
    const isOpen = body.classList.toggle('abierto');
    chev.classList.toggle('abierto', isOpen);
    header.setAttribute('aria-expanded', isOpen);
  };

  function init() {
    const el = document.getElementById('guia-orientacion');
    if (!el) return;

    const styleTag = document.createElement('style');
    styleTag.textContent = css;
    document.head.appendChild(styleTag);

    el.innerHTML = `
      <p class="np-guia-intro">
        Algunas condiciones del neurodesarrollo y la salud mental infantil se ubican en la frontera entre la neurología y la psiquiatría. Esta guía orienta cuál es el punto de entrada más adecuado según lo que estás observando en tu hijo o hija. Cuando es necesario, coordinamos la evaluación entre ambas especialistas.
      </p>
      <div class="np-leyenda">
        <div class="np-leyenda-item"><div class="np-dot" style="background:${COLORS.teal}"></div> Neurología pediátrica · la Dra. Badilla</div>
        <div class="np-leyenda-item"><div class="np-dot" style="background:${COLORS.rosa}"></div> Psiquiatría Infantil y Adolescente · la Dra. Cortés</div>
        <div class="np-leyenda-item"><div class="np-dot" style="background:${COLORS.dorado}"></div> Evaluación conjunta</div>
      </div>
      ${datos.map(cardHTML).join('')}
    `;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
