'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import Link from 'next/link';
import RevealOnScroll from '@/components/shared/RevealOnScroll';

const TD = {
  cafe:       { spend:12,  regulars:80,  visits:30, margin:0.65, label:'Café' },
  hair:       { spend:65,  regulars:50,  visits:10, margin:0.75, label:'Hair' },
  retail:     { spend:55,  regulars:60,  visits:8,  margin:0.50, label:'Retail' },
  restaurant: { spend:45,  regulars:70,  visits:20, margin:0.65, label:'Restaurant' },
  wellness:   { spend:90,  regulars:40,  visits:12, margin:0.70, label:'Wellness' },
};

const PLANS = {
  free:    { lift:0.12, monthly:0,     annualMonthly:0     },
  starter: { lift:0.32, monthly:9.99,  annualMonthly:8.33  },
  growth:  { lift:0.52, monthly:19.99, annualMonthly:16.67 },
};

const REWARDS = {
  pct10:   { label: '10% off', sub: 'Safe', freqMult: 1.00, costFn: (s: number) => s*0.10, explain: (s: number,st: number) => `After ${st} visits, the customer gets 10% off their ${st}th visit.` },
  pct50:   { label: '50% off', sub: 'Good', freqMult: 1.15, costFn: (s: number) => s*0.50, explain: (s: number,st: number) => `After ${st} visits, the customer gets 50% off their ${st}th visit.` },
  favfree: { label: 'Free item', sub: 'Best', freqMult: 1.30, costFn: (s: number) => s,      explain: (s: number,st: number) => `After ${st} visits, the customer gets a free item on their ${st}th visit.` },
};

type Industry = keyof typeof TD;
type Reward = keyof typeof REWARDS;
type Plan = keyof typeof PLANS;

const fmt = (n: number) => '$'+Math.round(Math.max(0,n)).toLocaleString('en-US');

function useAnimatedCounter(target: number) {
    const [displayed, setDisplayed] = useState(target);
    const currentRef = useRef(target);
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        const start = currentRef.current;
        const diff = target - start;
        const duration = Math.min(600, Math.max(200, Math.abs(diff) * 0.15));
        const startTime = performance.now();

        if (rafRef.current) cancelAnimationFrame(rafRef.current);

        function tick(now: number) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            const value = Math.round(start + diff * ease);
            currentRef.current = value;
            setDisplayed(value);
            if (progress < 1) {
                rafRef.current = requestAnimationFrame(tick);
            } else {
                currentRef.current = target;
                setDisplayed(target);
            }
        }

        rafRef.current = requestAnimationFrame(tick);
        return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
    }, [target]);

    return displayed;
}

const customCSS = `
.calc-card-custom * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Plus Jakarta Sans', sans-serif; }
.calc-card-custom {
  background: white;
  border-radius: 16px;
  width: 100%;
  max-width: 520px;
  box-shadow: 0 2px 20px rgba(0,0,0,0.06), 0 0 0 0.5px #e2e8e4;
  overflow: hidden;
  color: #1a2a1e;
}
.calc-card-custom .card-header {
  display: flex; justify-content: space-between; align-items: center;
  padding: 16px 20px; border-bottom: 0.5px solid #eef1ee;
}
.calc-card-custom .card-header h2 { font-size: 15px; font-weight: 600; color: #042940; margin: 0; }
.calc-card-custom .card-header p  { font-size: 11.5px; color: #7a8f82; margin-top: 2px; margin-bottom: 0; }
.calc-card-custom .live-badge {
  font-size: 11px; font-weight: 500;
  color: #0f6e56; background: #e8f8f0;
  border: 0.5px solid #5DCAA5;
  padding: 4px 10px; border-radius: 20px;
}
.calc-card-custom .card-body { padding: 10px 20px 8px; }
.calc-card-custom .section-label {
  font-size: 9.5px; font-weight: 600;
  letter-spacing: 0.1em; text-transform: uppercase;
  color: #7a8f82; margin-bottom: 5px; margin-top: 0;
}
.calc-card-custom .trade-pills { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 16px; }
.calc-card-custom .trade-pill {
  display: flex; align-items: center; gap: 4px;
  padding: 4px 12px; border-radius: 20px;
  font-size: 12px; cursor: pointer;
  background: white; color: #1a2a1e;
  border: 0.5px solid #dde5e0;
  transition: all 0.15s; font-family: inherit;
}
.calc-card-custom .trade-pill.active { background: #042940; color: white; border-color: #042940; }
.calc-card-custom .trade-dot { width: 6px; height: 6px; border-radius: 50%; background: #5FFF9F; display: none; }
.calc-card-custom .trade-pill.active .trade-dot { display: block; }
.calc-card-custom .slider-block { margin-bottom: 16px; }
.calc-card-custom .slider-row {
  display: flex; align-items: center; gap: 12px;
  padding: 10px 0;
  border-bottom: 0.5px solid #f0f2f0;
}
.calc-card-custom .slider-row label { font-size: 13.5px; font-weight: 500; color: #042940; width: 170px; flex-shrink: 0; margin: 0; }
.calc-card-custom .slider-row input[type=range] {
  flex: 1; height: 3px; border-radius: 99px;
  -webkit-appearance: none; outline: none; cursor: pointer;
  background: #dde5e0;
}
.calc-card-custom .slider-row input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 20px; height: 20px; border-radius: 50%;
  background: #042940; cursor: pointer;
  box-shadow: 0 1px 4px rgba(4,41,64,0.3);
}
.calc-card-custom .slider-val {
  font-size: 13.5px; font-weight: 700;
  color: #042940; width: 36px; text-align: right;
  font-variant-numeric: tabular-nums;
}
.calc-card-custom .reward-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 6px; }
.calc-card-custom .reward-btn {
  padding: 8px; border-radius: 8px; text-align: center;
  cursor: pointer; border: 0.5px solid #dde5e0;
  background: white; font-family: inherit; transition: all 0.15s;
}
.calc-card-custom .reward-btn.active { background: #042940; color: white; border-color: #042940; }
.calc-card-custom .reward-btn .r-main { font-size: 12.5px; font-weight: 500; display: block; }
.calc-card-custom .reward-btn .r-sub  { font-size: 10px; color: #7a8f82; margin-top: 2px; display: block; }
.calc-card-custom .reward-btn.active .r-sub { color: rgba(255,255,255,0.55); }
.calc-card-custom .plan-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 6px; margin-bottom: 8px; }
.calc-card-custom .plan-card {
  position: relative; border-radius: 8px;
  padding: 7px 8px; cursor: pointer;
  border: 0.5px solid #dde5e0;
  background: white; transition: all 0.15s;
}
.calc-card-custom .plan-card.active { background: #042940; color: white; border-color: #042940; }
.calc-card-custom .plan-card.recommended { border-color: #5FFF9F; }
.calc-card-custom .plan-card.active.recommended { border-color: #5FFF9F; }
.calc-card-custom .rec-badge {
  position: absolute; top: -10px; left: 50%; transform: translateX(-50%);
  font-size: 9px; font-weight: 600;
  background: #042940; color: #5FFF9F;
  border: 0.5px solid #5FFF9F;
  padding: 2px 8px; border-radius: 20px; white-space: nowrap;
}
.calc-card-custom .plan-card.active .rec-badge { background: #5FFF9F; color: #042940; }
.calc-card-custom .lift-badge {
  display: inline-block; font-size: 9px; font-weight: 500;
  padding: 1px 6px; border-radius: 20px; margin-bottom: 3px;
  background: #e8f8f0; color: #0f6e56;
  border: 0.5px solid #5dcaa5;
}
.calc-card-custom .plan-card.active .lift-badge {
  background: rgba(95,255,159,0.15); color: #5FFF9F;
  border-color: rgba(95,255,159,0.3);
}
.calc-card-custom .plan-name { font-size: 10px; color: #7a8f82; margin-bottom: 1px; display: block; }
.calc-card-custom .plan-card.active .plan-name { color: rgba(255,255,255,0.5); }
.calc-card-custom .plan-price { font-size: 18px; font-weight: 700; color: #5FFF9F; line-height: 1; }
.calc-card-custom .plan-price .mo { font-size: 10px; font-weight: 400; color: #7a8f82; }
.calc-card-custom .plan-card.active .plan-price .mo { color: rgba(255,255,255,0.4); }
.calc-card-custom .plan-hint { font-size: 11px; color: #7a8f82; margin-top: 8px; margin-bottom: 0; }
.calc-card-custom .result-box {
  background: #f4f7f5; margin: 0 16px 16px;
  border-radius: 12px; padding: 16px 20px; color: #042940;
  border: 0.5px solid #e2e8e4;
}
.calc-card-custom .result-eyebrow {
  font-size: 9.5px; font-weight: 600;
  letter-spacing: 0.1em; text-transform: uppercase;
  color: #7a8f82; margin-bottom: 4px; margin-top: 0;
}
.calc-card-custom .result-amount {
  font-size: 2.6rem; font-weight: 700;
  color: #042940; line-height: 1;
  font-variant-numeric: tabular-nums;
}
.calc-card-custom .result-unit { font-size: 14px; color: #7a8f82; margin-left: 4px; }
.calc-card-custom .result-desc { font-size: 11.5px; color: #4a5a50; margin: 4px 0 12px; line-height: 1.5; }
.calc-card-custom .result-rows { border-top: 0.5px solid #e2e8e4; padding-top: 12px; display: flex; flex-direction: column; gap: 8px; }
.calc-card-custom .result-row { display: flex; justify-content: space-between; font-size: 12px; color: #7a8f82; }
.calc-card-custom .result-row .v-pos { color: #042940; font-weight: 500; }
.calc-card-custom .result-row .v-neg { color: #e84f4f; font-weight: 500; }
.calc-card-custom .result-row.total {
  border-top: 0.5px solid #e2e8e4;
  padding-top: 8px; margin-top: 4px;
  font-size: 13px; font-weight: 600; color: #042940;
}
.calc-card-custom .result-row.total .v-green { color: #0a7a50; }
.calc-card-custom .result-explain { font-size: 10.5px; color: #9aaa9f; margin-top: 12px; padding-top: 12px; border-top: 0.5px solid #e2e8e4; line-height: 1.5; margin-bottom: 0; }
.calc-card-custom .billing-toggle {
  display: flex; align-items: center; gap: 8px;
  margin-bottom: 6px;
}
.calc-card-custom .toggle-track {
  width: 36px; height: 20px; border-radius: 20px;
  background: #dde5e0; cursor: pointer;
  position: relative; transition: background 0.2s; flex-shrink: 0;
  border: none; padding: 0;
}
.calc-card-custom .toggle-track.on { background: #042940; }
.calc-card-custom .toggle-thumb {
  position: absolute; top: 3px; left: 3px;
  width: 14px; height: 14px; border-radius: 50%;
  background: white; transition: transform 0.2s;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
}
.calc-card-custom .toggle-track.on .toggle-thumb { transform: translateX(16px); }
.calc-card-custom .toggle-label { font-size: 12px; color: #4a5a50; }
.calc-card-custom .toggle-label strong { color: #042940; }
.calc-card-custom .save-badge {
  font-size: 9.5px; font-weight: 600;
  background: #e8f8f0; color: #0f6e56;
  border: 0.5px solid #5dcaa5;
  padding: 2px 7px; border-radius: 20px;
}
.calc-card-custom .plan-price-original {
  font-size: 10px; color: #7a8f82;
  text-decoration: line-through;
  margin-bottom: 1px;
}
.calc-card-custom .plan-card.active .plan-price-original { color: rgba(255,255,255,0.35); }
.calc-card-custom .mb-section { margin-bottom: 10px; }
`;

function SliderRow({
    label, value, set, min, max, step, fmt: fmtFn, id
}: {
    label: string;
    value: number;
    set: (v: number) => void;
    min: number; max: number; step: number;
    fmt: (v: number) => string;
    id: string;
}) {
    const pct = ((value - min) / (max - min)) * 100;
    const trackBg = `linear-gradient(to right, #042940 0%, #5FFF9F ${pct}%, #dde5e0 ${pct}%)`;

    return (
        <div className="slider-row">
            <label>{label}</label>
            <input
                type="range" id={id} min={min} max={max} step={step} value={value}
                onChange={e => set(Number(e.target.value))}
                style={{ background: trackBg }}
            />
            <span className="slider-val" id={`v-${id}`}>
                {fmtFn(value)}
            </span>
        </div>
    );
}

export default function Calculator() {
    const [ind, setInd] = useState<Industry>('cafe');
    const [spend, setSpend] = useState(12);
    const [regs, setRegs] = useState(80);
    const [visits, setVisits] = useState(30);
    const [stamps, setStamps] = useState(10);
    const [reward, setReward] = useState<Reward>('favfree');
    const [plan, setPlan] = useState<Plan>('growth');
    const [annual, setAnnual] = useState(false);

    const handleIndustry = (key: Industry) => {
        setInd(key);
        const d = TD[key];
        setSpend(d.spend); setRegs(d.regulars); setVisits(d.visits);
    };

    const result = useCallback(() => {
        const p = PLANS[plan];
        const r = REWARDS[reward];
        const margin = TD[ind].margin;

        const planLift = p.lift;
        const effectiveVisits = regs * visits * (1 + planLift) * r.freqMult;
        const baseVisits = regs * visits;
        const baseRevenue = baseVisits * spend;
        const loyaltyRevenue = effectiveVisits * spend;
        const grossProfit = loyaltyRevenue * margin;
        const baseProfit = baseRevenue * margin;
        const extraProfit = grossProfit - baseProfit;

        const rewardsEarned = regs * Math.floor((visits * (1 + planLift) * r.freqMult) / stamps);
        const totalRewardCost = rewardsEarned * r.costFn(spend) * margin;
        
        const subCost = annual
            ? (p.annualMonthly === 0 ? 0 : p.annualMonthly * 12)
            : p.monthly * 12;
            
        const net = extraProfit - totalRewardCost - subCost;
        const effectiveLiftPct = Math.round(((effectiveVisits / baseVisits) - 1) * 100);

        return {
            net: Math.max(0, net),
            baseRevenue, totalRewardCost, subCost, effectiveLiftPct, margin,
        };
    }, [ind, spend, regs, visits, stamps, reward, plan, annual]);

    const {
        net, baseRevenue, totalRewardCost, subCost, effectiveLiftPct, margin,
    } = result();

    const animatedNet = useAnimatedCounter(net);

    const getLiftPct = (pk: Plan) => {
        const p = PLANS[pk];
        const r = REWARDS[reward];
        return Math.round(((1 + p.lift) * r.freqMult - 1) * 100);
    };

    return (
        <section id="calc" style={{ padding: '100px 40px', background: '#fff' }}>
            <style dangerouslySetInnerHTML={{ __html: customCSS }} />
            <div style={{
                maxWidth: 'var(--max-w)', margin: '0 auto',
                display: 'grid', gridTemplateColumns: '1fr 1.1fr',
                gap: '64px', alignItems: 'center',
            }} className="calc-grid">
                
                {/* Left copy */}
                <RevealOnScroll>
                    <p className="subline" style={{ color: 'var(--g2)' }}>Run the math</p>
                    <h2 className="h1" style={{ color: 'var(--navy)', margin: '12px 0 18px' }}>
                        What are your regulars{' '}
                        <em style={{ fontStyle: 'italic', color: 'var(--navy)' }}>actually worth?</em>
                    </h2>
                    <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#4a6070', marginBottom: '18px' }}>
                        Move the sliders. See exactly what a loyalty program could add to your annual
                        revenue <strong>after</strong> the cost of every reward you give away.
                    </p>
                    <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#4a6070', marginBottom: '28px' }}>
                        Most local businesses are surprised by the answer. The reward isn't a cost,
                        it's what earns the next visit.
                    </p>
                    <a href="https://dashboard.perkplus.com.au/register" className="btn btn-md btn-primary">Start free</a>
                </RevealOnScroll>

                {/* Calculator card */}
                <RevealOnScroll delay={2}>
                    <div className="calc-card-custom">
                        <div className="card-header">
                            <div>
                            <h2>Your regulars · annual value</h2>
                            <p>Adjust to match your business</p>
                            </div>
                            <span className="live-badge">Live</span>
                        </div>

                        <div className="card-body">
                            <p className="section-label">Your Trade</p>
                            <div className="trade-pills">
                            {(Object.keys(TD) as Industry[]).map(t => (
                                <button key={t} className={`trade-pill ${ind === t ? 'active' : ''}`} onClick={() => handleIndustry(t)}>
                                    <span className="trade-dot"></span>
                                    {t === 'cafe' ? '☕ Café' : t === 'hair' ? '✂️ Hair' : t === 'retail' ? '🛍️ Retail' : t === 'restaurant' ? '🍽️ Restaurant' : '🌿 Wellness'}
                                </button>
                            ))}
                            </div>

                            <div className="slider-block">
                                <SliderRow id="spend" label="Avg spend per visit" value={spend} set={setSpend} min={5} max={300} step={5} fmt={v => `$${v}`} />
                                <SliderRow id="regulars" label="Approx. regulars" value={regs} set={setRegs} min={5} max={500} step={5} fmt={v => `${v}`} />
                                <SliderRow id="visits" label="Visits per year (each regular)" value={visits} set={setVisits} min={1} max={52} step={1} fmt={v => `${v}`} />
                                <SliderRow id="stamps" label="Stamps to get reward" value={stamps} set={setStamps} min={5} max={20} step={1} fmt={v => `${v}`} />
                            </div>

                            <div className="mb-section">
                                <p className="section-label">Reward Strength</p>
                                <div className="reward-grid">
                                    {(Object.keys(REWARDS) as Reward[]).map(r => (
                                        <button key={r} className={`reward-btn ${reward === r ? 'active' : ''}`} onClick={() => setReward(r)}>
                                            <span className="r-main">{REWARDS[r].label}</span>
                                            <span className="r-sub">{REWARDS[r].sub}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-section">
                                <p className="section-label">Perk+ Plan</p>
                                
                                <div className="billing-toggle">
                                    <button className={`toggle-track ${annual ? 'on' : ''}`} onClick={() => setAnnual(!annual)}>
                                        <span className="toggle-thumb"></span>
                                    </button>
                                    <span className="toggle-label">{annual ? <strong>Annual</strong> : 'Monthly'}</span>
                                    {annual && <span className="save-badge">Save ~17%</span>}
                                </div>

                                <div className="plan-grid">
                                    {(Object.keys(PLANS) as Plan[]).map(p => {
                                        const isRec = p === 'growth';
                                        const origPrice = p === 'starter' ? '$9.99/mo' : p === 'growth' ? '$19.99/mo' : '\u00A0';
                                        const currPrice = p === 'free' ? '$0' : p === 'starter' ? (annual ? '$8.33' : '$9.99') : (annual ? '$16.67' : '$19.99');
                                        return (
                                            <div key={p} className={`plan-card ${plan === p ? 'active' : ''} ${isRec ? 'recommended' : ''}`} onClick={() => setPlan(p)}>
                                                {isRec && <span className="rec-badge">★ Recommended</span>}
                                                <span className="lift-badge">{getLiftPct(p)}% visit lift</span>
                                                <span className="plan-name">{p.charAt(0).toUpperCase() + p.slice(1)}</span>
                                                <div className="plan-price-original" style={{ display: (annual && p !== 'free') ? 'block' : 'none' }}>{origPrice}</div>
                                                <div className="plan-price">{currPrice}<span className="mo"> /mo</span></div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <p className="plan-hint">Higher plans unlock push, SMS &amp; email, driving greater visit lift.</p>
                            </div>
                        </div>

                        <div className="result-box">
                            <p className="result-eyebrow">Estimated Net Return · Year 1</p>
                            <div>
                                <span className="result-amount">${animatedNet.toLocaleString('en-US')}</span>
                                <span className="result-unit">/year</span>
                            </div>
                            <p className="result-desc">
                                Based on {regs} regulars visiting {effectiveLiftPct}% more often, using {Math.round(margin*100)}% margin for {TD[ind].label}.
                            </p>
                            <div className="result-rows">
                                <div className="result-row">
                                    <span>Visit lift from loyalty</span>
                                    <span className="v-pos">+{effectiveLiftPct}%</span>
                                </div>
                                <div className="result-row">
                                    <span>Revenue from regulars (no loyalty)</span>
                                    <span className="v-pos">{fmt(baseRevenue)}</span>
                                </div>
                                <div className="result-row">
                                    <span>Cost of rewards given</span>
                                    <span className="v-neg">−{fmt(totalRewardCost)}</span>
                                </div>
                                {subCost > 0 && (
                                    <div className="result-row">
                                        <span>Subscription ({annual ? 'annual' : 'monthly ×12'})</span>
                                        <span className="v-neg">−{fmt(subCost)}</span>
                                    </div>
                                )}
                                <div className="result-row total">
                                    <span>Net additional revenue</span>
                                    <span className="v-green">{fmt(net)}</span>
                                </div>
                            </div>
                            <p className="result-explain">{REWARDS[reward].explain(spend, stamps)}</p>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
}