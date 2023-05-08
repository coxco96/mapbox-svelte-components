<script>
    // UTILS
    import { mapKey } from "./../utils/mapbox/mapbox.js";
    import { setContext } from "svelte";

    // COMPONENTS
    import Map from "./Map.svelte";

    // EXPORT PROPS
    export let mapOpts = undefined;
    let map;
    // SET CONTEXT IN ORDER TO PASS STORES AS INSTANCES OF THIS SPECIFIC MAP
    setContext(mapKey, {
        getMap: () => map,
        mapLoaded: () => mapLoaded,
        getMapOpts: () => mapOpts, // not store
    });

</script>

<svelte:head>
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
        crossorigin="anonymous"
    />
    <link
        href="https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.css"
        rel="stylesheet"
    />

    <style>
        .mapboxgl-map {
            height: 600px;
        }
    </style>
</svelte:head>

<div class="map">
    <Map {mapOpts}/>
</div>

<style>
    .map {
        height: 100%;
        width: 100%;
    }
</style>
