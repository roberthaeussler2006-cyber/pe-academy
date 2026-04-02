"use client";

import { useState, useMemo } from "react";

export default function Calculator() {
  const [entryMultiple, setEntryMultiple] = useState(8);
  const [exitMultiple, setExitMultiple] = useState(10);
  const [leverage, setLeverage] = useState(60);
  const [ebitdaGrowth, setEbitdaGrowth] = useState(10);
  const [holdPeriod, setHoldPeriod] = useState(5);

  const results = useMemo(() => {
    const initialEBITDA = 100;
    const entryEV = initialEBITDA * entryMultiple;
    const debtAmount = entryEV * (leverage / 100);
    const equityInvested = entryEV - debtAmount;

    const exitEBITDA = initialEBITDA * Math.pow(1 + ebitdaGrowth / 100, holdPeriod);
    const exitEV = exitEBITDA * exitMultiple;

    const debtRemaining = debtAmount * 0.5;
    const exitEquity = exitEV - debtRemaining;

    const moic = exitEquity / equityInvested;
    const irr = (Math.pow(moic, 1 / holdPeriod) - 1) * 100;

    return {
      initialEBITDA,
      entryEV,
      debtAmount,
      equityInvested,
      exitEBITDA: Math.round(exitEBITDA),
      exitEV: Math.round(exitEV),
      debtRemaining: Math.round(debtRemaining),
      exitEquity: Math.round(exitEquity),
      moic: moic.toFixed(2),
      irr: irr.toFixed(1),
    };
  }, [entryMultiple, exitMultiple, leverage, ebitdaGrowth, holdPeriod]);

  const SliderInput = ({
    label,
    value,
    setValue,
    min,
    max,
    step,
    unit,
  }: {
    label: string;
    value: number;
    setValue: (v: number) => void;
    min: number;
    max: number;
    step: number;
    unit: string;
  }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <label className="text-sm text-ink-600">{label}</label>
        <span className="font-mono text-sm text-clay-500">
          {value}
          {unit}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full"
      />
    </div>
  );

  return (
    <div className="border border-cream-300 bg-white p-6">
      <h3 className="text-lg font-semibold text-ink-900 mb-1">IRR / MOIC Calculator</h3>
      <p className="text-sm text-ink-400 mb-6">
        Adjust the inputs below. Assumes $100M initial EBITDA and 50% debt paydown over the hold period.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <SliderInput label="Entry Multiple" value={entryMultiple} setValue={setEntryMultiple} min={4} max={15} step={0.5} unit="x" />
          <SliderInput label="Exit Multiple" value={exitMultiple} setValue={setExitMultiple} min={4} max={15} step={0.5} unit="x" />
          <SliderInput label="Leverage (Debt %)" value={leverage} setValue={setLeverage} min={0} max={80} step={5} unit="%" />
          <SliderInput label="Annual EBITDA Growth" value={ebitdaGrowth} setValue={setEbitdaGrowth} min={0} max={30} step={1} unit="%" />
          <SliderInput label="Hold Period (Years)" value={holdPeriod} setValue={setHoldPeriod} min={1} max={10} step={1} unit="yr" />
        </div>

        <div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-cream-100 p-4 border border-cream-300">
              <div className="text-xs text-ink-400 font-mono mb-1">IRR</div>
              <div className={`text-3xl font-mono font-bold ${Number(results.irr) >= 20 ? "text-green-600" : Number(results.irr) >= 15 ? "text-clay-500" : "text-red-500"}`}>
                {results.irr}%
              </div>
            </div>
            <div className="bg-cream-100 p-4 border border-cream-300">
              <div className="text-xs text-ink-400 font-mono mb-1">MOIC</div>
              <div className={`text-3xl font-mono font-bold ${Number(results.moic) >= 2.5 ? "text-green-600" : Number(results.moic) >= 2 ? "text-clay-500" : "text-red-500"}`}>
                {results.moic}x
              </div>
            </div>
          </div>

          <div className="text-xs font-mono text-ink-400 space-y-2 bg-cream-50 p-4 border border-cream-200">
            <div className="text-ink-600 font-semibold mb-2">STEP-BY-STEP MATH</div>
            <div className="flex justify-between">
              <span>Entry EBITDA</span>
              <span className="text-ink-700">${results.initialEBITDA}M</span>
            </div>
            <div className="flex justify-between">
              <span>Entry EV ({entryMultiple}x EBITDA)</span>
              <span className="text-ink-700">${results.entryEV}M</span>
            </div>
            <div className="flex justify-between">
              <span>Debt ({leverage}% of EV)</span>
              <span className="text-ink-700">${results.debtAmount}M</span>
            </div>
            <div className="flex justify-between border-b border-cream-300 pb-2">
              <span>Equity Invested</span>
              <span className="text-clay-500">${results.equityInvested}M</span>
            </div>
            <div className="flex justify-between pt-1">
              <span>Exit EBITDA ({ebitdaGrowth}% growth x {holdPeriod}yr)</span>
              <span className="text-ink-700">${results.exitEBITDA}M</span>
            </div>
            <div className="flex justify-between">
              <span>Exit EV ({exitMultiple}x EBITDA)</span>
              <span className="text-ink-700">${results.exitEV}M</span>
            </div>
            <div className="flex justify-between">
              <span>Remaining Debt (50% paydown)</span>
              <span className="text-ink-700">${results.debtRemaining}M</span>
            </div>
            <div className="flex justify-between border-t border-cream-300 pt-2">
              <span>Exit Equity Value</span>
              <span className="text-green-600">${results.exitEquity}M</span>
            </div>
            <div className="flex justify-between">
              <span>MOIC = ${results.exitEquity}M / ${results.equityInvested}M</span>
              <span className="text-clay-500">{results.moic}x</span>
            </div>
            <div className="flex justify-between">
              <span>IRR = {results.moic}x ^ (1/{holdPeriod}) - 1</span>
              <span className="text-clay-500">{results.irr}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
