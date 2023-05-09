<script>

    // storybook use only
    import MapPage from '../../stories/storybook-template/TemplatePage.svelte'
    export let title;
    export let codeBlock;
    export let content;

    // UTILS
    import { mapKey } from "./../utils/mapbox/mapbox.js";
    import { setContext } from "svelte";
    import { map, mapLoaded } from "$lib/utils/stores/stores.js";


    // COMPONENTS
    import Map from "./Map.svelte";
    import Geocoder from "./Geocoder.svelte";
    import SourceLayer from './SourceLayer.svelte';

    // EXPORT PROPS
    export let mapOpts = undefined;
    export let geocoderOpts = undefined;
    export let addGeocoder = false;
    export let geoprocess = undefined;
    export let sourceOpts = undefined;
    export let data = undefined;
    export let layerOpts = undefined;
    export let mapScript = undefined;

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
    <Map {mapOpts} {mapScript}>
        {#if addGeocoder}
        <Geocoder {geocoderOpts} {geoprocess}/>
        {/if}
        {#if data}
        <SourceLayer {data} {sourceOpts} {layerOpts}/>
        {/if}
    </Map>
</div>
</MapPage>
