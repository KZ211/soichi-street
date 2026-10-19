import type { ImageMetadata } from 'astro';

import golAntes from '../assets/trabajos/gol-antes.jpg';
import golDespues from '../assets/trabajos/gol-despues.jpg';
import renaultAntes from '../assets/trabajos/renault-antes.jpg';
import renaultDespues from '../assets/trabajos/renault-despues.jpg';
import paragolpeAntes from '../assets/trabajos/paragolpe-antes.jpg';
import paragolpeDespues from '../assets/trabajos/paragolpe-despues.jpg';
import tanqueAntes from '../assets/trabajos/tanque-antes.jpg';
import tanqueDespues from '../assets/trabajos/tanque-despues.jpg';
import civic from '../assets/trabajos/civic-black-pearl.jpg';
import polea from '../assets/trabajos/engranaje-violeta.jpg';
import carenados from '../assets/trabajos/carenados-azul.jpg';
import megane from '../assets/trabajos/megane-cherry.jpg';
import pintando from '../assets/trabajos/pintando-rojo.jpg';
import pistola from '../assets/trabajos/pistola-glasurit.jpg';
import tapaRosa from '../assets/trabajos/tapa-rosa.jpg';
import preparar from '../assets/trabajos/preparar.jpg';

export const site = {
  name: 'Soichi Street',
  tagline: 'chapa & pintura',
  zone: 'Presidente Derqui, Pilar',
  phoneLabel: '11 3140-8890',
  whatsapp: '5491131408890',
  instagram: 'https://www.instagram.com/soichi_street/',
  instagramHandle: '@soichi_street',
};

export const waLink = (text: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const waDefault = waLink('Hola Soichi Street, quiero pedir un presupuesto.');

export type Servicio = {
  id: string;
  name: string;
  fact: string;
  image?: ImageMetadata;
  alt?: string;
};

// Los cuatro servicios de su bio de Instagram, más el trabajo de piezas que muestra en los reels.
export const servicios: Servicio[] = [
  {
    id: 'chapa',
    name: 'Chapa',
    fact: 'Reparación de carrocería: golpes, abolladuras y frentes chocados.',
    image: golAntes,
    alt: 'Frente de un VW Gol gris chocado, con el paragolpes arrancado',
  },
  {
    id: 'pintura',
    name: 'Pintura',
    fact: 'Por pieza o completa, bicapa y cambios de color.',
    image: pintando,
    alt: 'El pintor con máscara y pistola frente a un capot recién pintado de rojo',
  },
  {
    id: 'pulido',
    name: 'Pulido',
    fact: 'Pulido, abrillantado y tratamientos. También ópticas.',
    image: civic,
    alt: 'Capot negro pulido como espejo, reflejando el cielo y las nubes',
  },
  {
    id: 'piezas',
    name: 'Piezas',
    fact: 'Tapas de válvulas, poleas, llantas y carenados, en el color que quieras.',
    image: tapaRosa,
    alt: 'Tapa de válvulas de Honda pintada de rosa, sobre el Civic',
  },
  {
    id: 'soldadura',
    name: 'Soldadura',
    fact: 'Soldadura en general, para la carrocería y lo que haga falta.',
  },
];

export type Trabajo = {
  id: string;
  title: string;
  detail: string;
  image: ImageMetadata;
  alt: string;
  before?: ImageMetadata;
  beforeAlt?: string;
  span: 'wide' | 'single';
};

// Pies tomados de sus propias publicaciones (hashtags y textos de los reels).
export const trabajos: Trabajo[] = [
  {
    id: 'gol',
    title: 'VW Gol Trend · OPK-897',
    detail: 'Frente completo',
    before: golAntes,
    beforeAlt: 'El Gol con el frente hundido y el paragolpes roto',
    image: golDespues,
    alt: 'El mismo Gol, gris, con el frente reparado y pintado',
    span: 'wide',
  },
  {
    id: 'captur',
    title: 'Renault Captur',
    detail: 'Rojo, lateral trasero',
    before: renaultAntes,
    beforeAlt: 'Lateral trasero de un Renault Captur con fondo gris y masilla',
    image: renaultDespues,
    alt: 'El mismo lateral pintado en rojo brillante',
    span: 'single',
  },
  {
    id: 'paragolpe',
    title: 'Paragolpe VW',
    detail: 'Bicapa',
    before: paragolpeAntes,
    beforeAlt: 'Paragolpes en la primera mano de color, todavía mate',
    image: paragolpeDespues,
    alt: 'El paragolpes terminado, bordó con brillo',
    span: 'single',
  },
  {
    id: 'tanque',
    title: 'Tanque de moto',
    detail: 'Azul',
    before: tanqueAntes,
    beforeAlt: 'Tanque de moto negro y gastado, preparándose para pintar',
    image: tanqueDespues,
    alt: 'Tanque de moto pintado de azul brillante',
    span: 'single',
  },
  {
    id: 'carenados',
    title: 'Carenados de moto',
    detail: 'Azul',
    image: carenados,
    alt: 'Carenados de moto cross pintados de azul metalizado',
    span: 'wide',
  },
  {
    id: 'polea',
    title: 'Polea Civic',
    detail: 'Violeta bicapa',
    image: polea,
    alt: 'Polea de distribución pintada de violeta metalizado',
    span: 'single',
  },
  {
    id: 'megane',
    title: 'Megane coupé',
    detail: 'Cherry',
    image: megane,
    alt: 'Lateral de un Megane coupé rojo cereza con reflejos',
    span: 'wide',
  },
  {
    id: 'tapa-civic',
    title: 'Tapa de válvulas Civic',
    detail: 'Rosa',
    image: tapaRosa,
    alt: 'Tapa de válvulas de Honda pintada de rosa',
    span: 'single',
  },
];

export type Etapa = { id: string; name: string; text: string; image: ImageMetadata; alt: string; video?: string };

// Las etapas que él mismo muestra en sus reels.
export const proceso: Etapa[] = [
  {
    id: 'preparar',
    name: 'Preparar',
    text: 'Se desarma, se endereza la chapa y se lija hasta dejar la pieza lista para pintar.',
    image: preparar,
    alt: 'Puerta blanca en chapa, con puntos de masilla y sin pintura',
  },
  {
    id: 'fondo',
    name: 'Fondo',
    text: 'Masilla donde hace falta y fondo para que el color agarre parejo. Primera mano.',
    image: paragolpeAntes,
    alt: 'Paragolpes con la primera mano, mate',
  },
  {
    id: 'color',
    name: 'Color',
    text: 'El color, con pinturas de Pinturería Iberoamericana. Bicapa, metalizados y cambios de color.',
    image: pintando,
    alt: 'Pintando de rojo con máscara y pistola',
  },
  {
    id: 'barniz',
    name: 'Barniz',
    text: 'Barniz para la profundidad y la protección. En sus trabajos: barniz Glasurit 923-155.',
    image: pistola,
    alt: 'Pistola de pintar violeta aplicando barniz sobre una pieza',
    // Fragmento de su reel del barniz Glasurit.
    video: '/barniz.webm',
  },
  {
    id: 'pulido',
    name: 'Pulido',
    text: 'Pulido y abrillantado hasta que la pieza refleje como un espejo.',
    image: civic,
    alt: 'Capot negro pulido reflejando el cielo',
  },
];
