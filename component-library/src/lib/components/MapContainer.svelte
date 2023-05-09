<script>

    // UTILS
    import { mapKey } from "./../utils/mapbox/mapbox.js";
    import { setContext } from "svelte";
    import Geocoder from "./Geocoder.svelte";
    import { map, mapLoaded } from "$lib/utils/stores/stores.js";
    import MapPage from './../../stories/MapPage.svelte' // storybook use only
    export let title;
    export let codeBlock;
    export let content;

    // COMPONENTS
    import Map from "./Map.svelte";

    // EXPORT PROPS
    export let mapOpts = undefined;
    export let geocoderOpts = undefined;
    export let addGeocoder = false;

    // SET STORES TO CONTEXT
    setContext(mapKey, {
        getMap: () => map,
        getMapLoaded: () => mapLoaded,
    });
</script>


<svelte:head>

    <style>
        .mapboxgl-map {
            height: 500px;
            margin: 10px;
        }

        .map {
            height: 100%;
            width: 100%;
            max-width: 90%;
            margin: auto;
        }

        .mapboxgl-ctrl-geocoder {
            min-width: 100%;
        }
    </style>
</svelte:head>
<MapPage {title} {codeBlock} {content}>
<div class="map">
    <Map {mapOpts}>
        {#if addGeocoder}
        <Geocoder />
        {/if}
    </Map>
</div>
</MapPage>
