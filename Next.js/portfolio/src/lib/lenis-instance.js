/**
 * Lenis scroll instance — module-level singleton.
 *
 * SmoothScroll.jsx assigns `lenisRef.current` after creation.
 * Any component (e.g. FullScreenNavbar) can import this ref and call
 * lenisRef.current?.stop() or lenisRef.current?.start() to control scroll
 * without prop drilling or extra context.
 */
const lenisRef = { current: null };
export default lenisRef;
