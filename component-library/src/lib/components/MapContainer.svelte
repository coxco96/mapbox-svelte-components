<script>
    // UTILS
    import { mapKey } from "$lib/utils/mapbox.js";
    import { setContext } from "svelte";
    import { map, mapLoaded, dataStore, mapOptsStore } from "./stores";
    // import { options } from "./map-options";
    // import { setOptions } from "$lib/utils/utils";

    // EXTERNAL LIBRARIES
    import gjv from "geojson-validation";

    // COMPONENTS
    import Map from "./Map.svelte";
    import Geocoder from "./Geocoder.svelte";
    import DisplayData from "./DisplayData.svelte";

    // EXPORT PROPS
    export let geojson = undefined;
    export let displayData = undefined;
    export let addGeocoder = false;
    export let geocoderOpts = undefined;
    export let mapOpts = undefined;
    export let displayDataOptions = undefined;
    export let geoprocess = undefined;

    // SET CONTEXT IN ORDER TO PASS STORES AS INSTANCES OF THIS SPECIFIC MAP
    setContext(mapKey, {
        getMap: () => map,
        mapLoaded: () => mapLoaded,
        getData: () => dataStore,
        getMapOpts: () => mapOptsStore,
        getGeocoderOpts: () => geocoderOpts
    });

    // VALIDATE GEOJSON DATA (return data if valid)
    const validGeojson = () => (gjv.valid(geojson) ? geojson : undefined);

    // UPDATE dataStore
    $dataStore = validGeojson();
</script>

<div class="map">
    <Map {mapOpts}>
        <!-- <Isochrone/>  -->
        {#if addGeocoder}
            <Geocoder {geocoderOpts} {geoprocess}/>
            #{/if}
        {#if validGeojson()}
            {#if displayData != false}
                <DisplayData {displayDataOptions} />
            {/if}
        {/if}
    </Map>
</div>
