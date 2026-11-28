"use client";

import { useId, useMemo, useState } from "react";

const BEANS_PER_DOLLAR = 10000;
const MIN_USD = 10;

function format(value: number, digits = 2) {
  return value.toLocaleString("en-IN", { minimumFractionDigits: digits, maximumFractionDigits: digits });
}

/** Beans-to-rupees estimator. The rate is a user input, never a claimed site rate. */
export function BeansCalculator() {
  const beansId = useId();
  const rateId = useId();
  const [beans, setBeans] = useState("100000");
  const [rate, setRate] = useState("88");

  const result = useMemo(() => {
    const b = Number(beans.replace(/[^0-9.]/g, ""));
    const r = Number(rate.replace(/[^0-9.]/g, ""));
    const valid = Number.isFinite(b) && b > 0 && Number.isFinite(r) && r > 0;
    const usd = b / BEANS_PER_DOLLAR;
    return {
      valid,
      usd,
      inr: usd * r,
      meetsMinimum: usd >= MIN_USD,
      beansShort: Math.max(0, MIN_USD * BEANS_PER_DOLLAR - b),
    };
  }, [beans, rate]);

  return (
    <div className="card prose-site mt-6 max-w-3xl">
      <h2 id="calculator" className="text-2xl!">
        Beans to rupees calculator
      </h2>
      <p className="text-sm!">
        Uses the published rule of 10,000 Beans = US$1. The rupee rate is yours to enter; ₹88 is only a starting example.
      </p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={beansId} className="block text-sm font-semibold text-white">
            Beans balance
          </label>
          <input
            id={beansId}
            inputMode="numeric"
            value={beans}
            onChange={(e) => setBeans(e.target.value)}
            className="mt-2 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-lg text-white outline-none focus:border-lavender"
            placeholder="100000"
          />
        </div>
        <div>
          <label htmlFor={rateId} className="block text-sm font-semibold text-white">
            Rupees per US$1 (your rate)
          </label>
          <input
            id={rateId}
            inputMode="decimal"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="mt-2 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-lg text-white outline-none focus:border-lavender"
            placeholder="88"
          />
        </div>
      </div>

      <div aria-live="polite" className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-lavender/30 bg-lavender/10 p-4">
          <p className="text-xs! uppercase tracking-wide text-lavender">Dollar value</p>
          <p className="text-2xl! font-bold text-white">{result.valid ? `US$${format(result.usd)}` : "—"}</p>
        </div>
        <div className="rounded-xl border border-lavender/30 bg-lavender/10 p-4">
          <p className="text-xs! uppercase tracking-wide text-lavender">Estimated rupees</p>
          <p className="text-2xl! font-bold text-white">{result.valid ? `₹${format(result.inr, 0)}` : "—"}</p>
        </div>
      </div>

      {result.valid && (
        <p className="mt-4 text-sm!">
          {result.meetsMinimum
            ? "This is at or above the published US$10 host minimum before wallet and bank fees."
            : `This is below the published US$10 host minimum. You would need ${result.beansShort.toLocaleString("en-IN")} more Beans to reach it.`}
        </p>
      )}
      <p className="mt-2 text-xs! text-body">
        Estimate only. The app, the wallet and your bank decide the final amount, the rate and any fee. This page cannot access your account.
      </p>
    </div>
  );
}
