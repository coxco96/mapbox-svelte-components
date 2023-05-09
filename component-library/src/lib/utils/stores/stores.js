import {
    writable,
    derived
} from 'svelte/store';

import {randomString} from './../actions/random-string.js'

// map store for mapbox map object
export const map = writable();

// store to hold geojson data
export const dataStore = writable();

// if map is defined, mapLoaded is true; otherwise false
export const mapLoaded = derived(map, $map => $map ? true : false);

export const mapOptsStore = writable();

// generate random ID
export const id = writable(`map-${randomString(7)}`);

