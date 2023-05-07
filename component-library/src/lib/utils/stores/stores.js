import {
    writable,
    derived
} from 'svelte/store';

// map store for mapbox map object
export const map = writable();

// store to hold geojson data
export const dataStore = writable();

// if map is defined, mapLoaded is true; otherwise false
export const mapLoaded = derived(map, $map => $map ? true : false);

export const mapOptsStore = writable();

