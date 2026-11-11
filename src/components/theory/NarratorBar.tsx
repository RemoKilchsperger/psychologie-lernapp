import { useState } from 'react';
import type { Narrator } from '../../lib/useNarrator';

const RATES = [0.8, 0.9, 1, 1.1, 1.25, 1.5, 1.75];
const THINK = [0, 3, 5, 8, 12];

export function NarratorBar({ n, onPlayAll, title }: { n: Narrator; onPlayAll: () => void; title: string }) {
  const [showSettings, setShowSettings] = useState(false);
  const { settings: s, setSettings } = n;

  if (!n.supported) {
    return <p className="note small">Dein Browser unterstützt keine Sprachausgabe. Versuche es mit Edge, Chrome oder Safari.</p>;
  }

  const active = n.queue.length > 0;
  const pct = active ? ((n.index + 1) / n.queue.length) * 100 : 0;

  return (
    <div className={'narrator' + (active ? ' active' : '')} role="region" aria-label="Vorlesen">
      <div className="nr-row">
        {!active ? (
          <button className="nr-main" onClick={onPlayAll}>
            <span aria-hidden>▶</span> Ganzen Zeitstrahl anhören
          </button>
        ) : (
          <div className="nr-controls">
            <button onClick={n.prev} aria-label="Zurück" title="Zurück">⏮</button>
            {n.status === 'playing' ? (
              <button className="nr-play" onClick={n.pause} aria-label="Pause" title="Pause">⏸</button>
            ) : (
              <button className="nr-play" onClick={n.resume} aria-label="Weiter vorlesen" title="Weiter vorlesen">▶</button>
            )}
            <button onClick={n.next} aria-label="Nächster Abschnitt" title="Nächster Abschnitt">⏭</button>
            <button onClick={n.stop} aria-label="Beenden" title="Beenden">⏹</button>
          </div>
        )}

        <div className="nr-now" aria-live="polite">
          {active ? (
            <>
              <span className="nr-title">{title}</span>
              <span className="nr-label">
                {n.waiting ? '💭 Denkpause … überlege dir die Antwort' : n.current?.label}
              </span>
            </>
          ) : (
            <span className="muted small">
              Epochen, Inhalte, Personen und Leitfragen vorlesen lassen. Einzelne Epochen und Blöcke haben eigene 🔊-Knöpfe.
            </span>
          )}
        </div>

        {active && (
          <span className="nr-count small muted">
            {n.index + 1}/{n.queue.length}
          </span>
        )}
        <button
          className={'nr-gear' + (showSettings ? ' on' : '')}
          onClick={() => setShowSettings(!showSettings)}
          aria-expanded={showSettings}
          title="Einstellungen"
        >
          ⚙
        </button>
      </div>

      {active && (
        <div className="nr-progress" aria-hidden>
          <span style={{ width: `${pct}%` }} />
        </div>
      )}

      {showSettings && (
        <div className="nr-settings">
          <fieldset>
            <legend>Vorlesen</legend>
            <label className="switch">
              <input type="checkbox" checked={s.inhalte} onChange={(e) => setSettings({ inhalte: e.target.checked })} />
              <span>Inhalte</span>
            </label>
            <label className="switch">
              <input type="checkbox" checked={s.personen} onChange={(e) => setSettings({ personen: e.target.checked })} />
              <span>Personen</span>
            </label>
            <label className="switch">
              <input type="checkbox" checked={s.leitfragen} onChange={(e) => setSettings({ leitfragen: e.target.checked })} />
              <span>Leitfragen</span>
            </label>
            <label className="switch">
              <input type="checkbox" checked={s.onlyOpen} onChange={(e) => setSettings({ onlyOpen: e.target.checked })} />
              <span>Nur noch nicht gewusste Leitfragen</span>
            </label>
            <label className="switch">
              <input type="checkbox" checked={s.follow} onChange={(e) => setSettings({ follow: e.target.checked })} />
              <span>Automatisch mitscrollen</span>
            </label>
          </fieldset>
          <fieldset>
            <legend>Stimme</legend>
            <label>
              <span>Denkpause vor der Antwort</span>
              <select value={s.think} onChange={(e) => setSettings({ think: Number(e.target.value) })}>
                {THINK.map((t) => (
                  <option key={t} value={t}>
                    {t === 0 ? 'keine' : `${t} Sekunden`}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <span>Tempo</span>
              <select value={s.rate} onChange={(e) => setSettings({ rate: Number(e.target.value) })}>
                {RATES.map((r) => (
                  <option key={r} value={r}>
                    {r.toLocaleString('de-CH')}×
                  </option>
                ))}
              </select>
            </label>
            <label>
              <span>Stimme</span>
              <select value={n.voice?.voiceURI ?? ''} onChange={(e) => setSettings({ voiceURI: e.target.value || null })}>
                {n.voices.length === 0 && <option value="">Standardstimme</option>}
                {n.voices.map((v) => (
                  <option key={v.voiceURI} value={v.voiceURI}>
                    {v.name} ({v.lang})
                  </option>
                ))}
              </select>
            </label>
            <p className="muted small">Tipp: In Microsoft Edge klingen die «Natural»-Stimmen am natürlichsten.</p>
          </fieldset>
        </div>
      )}
    </div>
  );
}
