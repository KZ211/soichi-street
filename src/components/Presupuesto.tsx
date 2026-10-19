import { useMemo, useState } from 'react';
import './presupuesto.css';

const WHATSAPP = '5491131408890';

type Vehiculo = 'auto' | 'moto' | 'pieza';

// Las piezas del auto, dibujadas de costado como tramos de tubo. Cada una se enciende al marcarla.
// Perfil de un hatch de costado (proporciones de Gol): los paneles comparten bordes, así el contorno es uno solo.
const PANELES: { id: string; label: string; d: string[] }[] = [
  { id: 'porton', label: 'Portón trasero', d: ['M30 150 Q38 109 72 78 L104 76 L82 140 Z'] },
  { id: 'techo', label: 'Techo', d: ['M72 78 Q88 66 130 64 L340 63 Q380 64 404 77 L104 76 Z'] },
  { id: 'optica-tras', label: 'Óptica trasera', d: ['M30 150 L82 140 L82 172 L30 172 Z'] },
  { id: 'paragolpe-tras', label: 'Paragolpe trasero', d: ['M30 172 L82 172 L82 230 L40 230 Q30 230 30 220 Z'] },
  { id: 'guardabarros-tras', label: 'Guardabarros trasero', d: ['M82 140 L232 140 L232 230 L202 230 A52 52 0 0 0 98 230 L82 230 Z'] },
  { id: 'puerta-tras', label: 'Puerta trasera', d: ['M232 140 L352 140 L352 230 L232 230 Z'] },
  { id: 'puerta-del', label: 'Puerta delantera', d: ['M352 140 L470 140 L470 230 L352 230 Z'] },
  { id: 'capot', label: 'Capot', d: ['M470 140 L478 132 Q540 126 610 132 Q632 138 640 152 L470 152 Z'] },
  { id: 'guardabarros-del', label: 'Guardabarros delantero', d: ['M470 152 L590 152 L590 230 L580 230 A52 52 0 0 0 476 230 L470 230 Z'] },
  { id: 'optica-del', label: 'Óptica delantera', d: ['M590 152 L640 152 Q646 160 646 172 L590 172 Z'] },
  { id: 'paragolpe-del', label: 'Paragolpe delantero', d: ['M590 172 L646 172 L646 220 Q646 230 636 230 L590 230 Z'] },
  { id: 'llantas', label: 'Llantas', d: ['M112 234 a38 38 0 1 0 76 0 a38 38 0 1 0 -76 0 Z', 'M490 234 a38 38 0 1 0 76 0 a38 38 0 1 0 -76 0 Z'] },
];

// Vidrios (no se marcan): ventanillas y parabrisas.
const VIDRIOS = ['M110 80 L226 78 L226 136 L88 137 Z', 'M236 78 L346 77 L346 136 L236 136 Z', 'M356 77 L398 77 L466 136 L356 136 Z'];

const PIEZAS_MOTO = ['Tanque', 'Carenados', 'Guardabarros', 'Llantas', 'Otra'];
const PIEZAS_SUELTAS = ['Tapa de válvulas', 'Polea', 'Paragolpes', 'Llantas', 'Otra'];

const TRABAJOS = ['Chapa', 'Pintura', 'Pulido', 'Soldadura', 'Cambio de color'];

const VEHICULOS: { id: Vehiculo; label: string }[] = [
  { id: 'auto', label: 'Auto o camioneta' },
  { id: 'moto', label: 'Moto' },
  { id: 'pieza', label: 'Pieza suelta' },
];

function toggle(list: string[], item: string) {
  return list.includes(item) ? list.filter((x) => x !== item) : [...list, item];
}

export default function Presupuesto() {
  const [vehiculo, setVehiculo] = useState<Vehiculo>('auto');
  const [partes, setPartes] = useState<string[]>([]);
  const [trabajos, setTrabajos] = useState<string[]>([]);
  const [modelo, setModelo] = useState('');
  const [comentario, setComentario] = useState('');

  const etiquetas = useMemo(() => {
    if (vehiculo !== 'auto') return partes;
    return PANELES.filter((p) => partes.includes(p.id)).map((p) => p.label);
  }, [vehiculo, partes]);

  const mensaje = useMemo(() => {
    const lines = ['Hola Soichi Street! Quiero pedir un presupuesto.'];
    const tipo = VEHICULOS.find((v) => v.id === vehiculo)?.label ?? '';
    lines.push(`Vehículo: ${tipo}${modelo.trim() ? ` · ${modelo.trim()}` : ''}`);
    if (etiquetas.length) lines.push(`Partes: ${etiquetas.join(', ')}`);
    if (trabajos.length) lines.push(`Trabajo: ${trabajos.join(', ')}`);
    if (comentario.trim()) lines.push(`Comentario: ${comentario.trim()}`);
    lines.push('Te mando fotos por acá.');
    return lines.join('\n');
  }, [vehiculo, modelo, etiquetas, trabajos, comentario]);

  const href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensaje)}`;

  const cambiarVehiculo = (v: Vehiculo) => {
    setVehiculo(v);
    setPartes([]);
  };

  const opcionesSueltas = vehiculo === 'moto' ? PIEZAS_MOTO : PIEZAS_SUELTAS;

  return (
    <div className="pres">
      <fieldset className="pres-tipo">
        <legend className="sr-only">Qué hay que arreglar</legend>
        {VEHICULOS.map((v) => (
          <label key={v.id} className={vehiculo === v.id ? 'on' : ''}>
            <input type="radio" name="vehiculo" value={v.id} checked={vehiculo === v.id} onChange={() => cambiarVehiculo(v.id)} />
            {v.label}
          </label>
        ))}
      </fieldset>

      {vehiculo === 'auto' ? (
        <div className="pres-car">
          <svg viewBox="0 50 676 236" role="group" aria-label="Auto de costado: tocá las partes a arreglar">
            <g className="glass" aria-hidden="true">
              {VIDRIOS.map((d) => (
                <path key={d} d={d} />
              ))}
            </g>
            {PANELES.map((p) => {
              const on = partes.includes(p.id);
              return (
                <g
                  key={p.id}
                  className={`panel${on ? ' on' : ''}`}
                  role="checkbox"
                  aria-checked={on}
                  aria-label={p.label}
                  tabIndex={0}
                  onClick={() => setPartes((l) => toggle(l, p.id))}
                  onKeyDown={(e) => {
                    if (e.key === ' ' || e.key === 'Enter') {
                      e.preventDefault();
                      setPartes((l) => toggle(l, p.id));
                    }
                  }}
                >
                  {p.d.map((d) => (
                    <path key={d} d={d} />
                  ))}
                </g>
              );
            })}
          </svg>
          <p className="pres-hint" aria-live="polite">
            {etiquetas.length ? `Marcaste: ${etiquetas.join(', ')}` : 'Tocá las partes del auto que hay que arreglar.'}
          </p>
        </div>
      ) : (
        <fieldset className="pres-chips">
          <legend>¿Qué pieza?</legend>
          {opcionesSueltas.map((o) => (
            <label key={o} className={partes.includes(o) ? 'on' : ''}>
              <input type="checkbox" checked={partes.includes(o)} onChange={() => setPartes((l) => toggle(l, o))} />
              {o}
            </label>
          ))}
        </fieldset>
      )}

      <div className="pres-ticket">
        <div className="pres-left">
          <p className="pres-head">Tu pedido</p>
          <pre className="pres-msg">{mensaje}</pre>
        </div>

        <div className="pres-right">
          <fieldset className="pres-chips">
            <legend>¿Qué trabajo?</legend>
            {TRABAJOS.map((t) => (
              <label key={t} className={trabajos.includes(t) ? 'on' : ''}>
                <input type="checkbox" checked={trabajos.includes(t)} onChange={() => setTrabajos((l) => toggle(l, t))} />
                {t}
              </label>
            ))}
          </fieldset>

          <label className="pres-field">
            <span>Modelo y año</span>
            <input type="text" value={modelo} onChange={(e) => setModelo(e.target.value)} placeholder="Ej: Honda Civic 1999" maxLength={60} autoComplete="off" />
          </label>

          <label className="pres-field">
            <span>Contanos qué pasó (opcional)</span>
            <textarea value={comentario} onChange={(e) => setComentario(e.target.value)} placeholder="Ej: me rozaron la puerta en un estacionamiento" rows={3} maxLength={400} />
          </label>

          <a className="btn pres-send" href={href} target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
              <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.2c0-.1-.2-.2-.4-.3Z" />
            </svg>
            Enviar por WhatsApp
          </a>
          <p className="pres-note">Se abre WhatsApp con el mensaje armado. Sumale fotos del daño y listo.</p>
        </div>
      </div>
    </div>
  );
}
