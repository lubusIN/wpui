import '@testing-library/jest-dom/vitest';

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
	disconnect() {}
	observe() {}
	takeRecords() {
		return [];
	}
	unobserve() {}
};

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
	disconnect() {}
	observe() {}
	unobserve() {}
};

// Mock window.matchMedia
Object.defineProperty( window, 'matchMedia', {
	writable: true,
	value: ( query ) => ( {
		matches: false,
		media: query,
		onchange: null,
		addListener: () => {},
		removeListener: () => {},
		addEventListener: () => {},
		removeEventListener: () => {},
		dispatchEvent: () => false,
	} ),
} );
