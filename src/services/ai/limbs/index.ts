/**
 * Neural Limbs - Base Capability Export (Worker Safe)
 */

export * from './NeuralLimb';

// [NOTE] All specific limb classes must be imported dynamically or
// through explicit paths to prevent barrel-induced native module leaks
// into the Cloudflare Worker bundle.
