// ══════════════════════════════════════════════════════════
// TUNING CONFIG — Parametres globaux lipsync + idle + hair
// Telecharger ce fichier pour sauvegarder / restaurer la config
// ══════════════════════════════════════════════════════════
export const TUNING_DEFAULTS = {
    // ── Lipsync ──
    lerpSpeed: 0.29,
    lerpDecay: 0.59,
    resetToNeutral: 0.5,
    maxIntensity: 1.2,
    openMultiplier: 2.2,
    tightMultiplier: 2.2,
    duckMultiplier: 2.0,
    jawBoost: 1.5,
    tongueScale: 0.4,
    silenceThreshold: 0.08,

    // ── Idle: Blinks ──
    blinkIntervalMin: 1,
    blinkIntervalMax: 8,
    blinkCloseDuration: 60,
    blinkHoldDuration: 150,
    doubleBlink: 0.15,

    // ── Idle: Micro-expressions ──
    microMouthAmp: 0.4,
    microBrowAmp: 0.8,
    microSpeed: 4.7,
    smileIntensity: 0.4,

    // ── Idle: Breathing & head drift ──
    breathAmplitude: 0.15,
    breathSpeed: 4,
    headDriftAmp: 0.15,

    // ── Hair ──
    hairFlex: 1,
};
