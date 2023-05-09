<script>
    import { options } from "./../utils/options/geocoder-options.js";
    import { mapbox, mapKey } from "./../utils/mapbox/mapbox.js";
    import { getContext } from "svelte";

    // EXTERNAL LIBRARIES
    import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
    import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
    import { map } from "$lib/utils/stores/stores.js";

    // EXPORTS
    export let geocoderOpts = undefined; // see: https://github.com/mapbox/mapbox-gl-geocoder/blob/main/API.md;

    // GET CONTEXTS
    let thisMap = getContext(mapKey).getMap();
    let mapLoaded = getContext(mapKey).getMapLoaded();

    // MERGE DEFAULT OPTS WITH PROP (geocoderOpts)
    let customOpts = {
        ...options,
        ...geocoderOpts,
        accessToken: mapbox.accessToken,
        mapboxgl: mapbox,
    };


    // WAIT UNTIL MAP IS DEFINED
    $: if ($thisMap) {
        $thisMap.on('load', () => {
            console.log("now loading");
        let geocoder = new MapboxGeocoder(customOpts);
        geocoder.addTo($thisMap);
        })

    } else {
        console.log("map not yet loaded");
    }

    // create and add geocoder function
    // const addGeocoder = (map) => {
    //     // merge default options with requested options
    //     let customOpts = {
    //         ...options,
    //         ...geocoderOpts,
    //         accessToken: mapbox.accessToken,
    //         mapboxgl: mapbox,
    //     };
    //     map.on("load", () => {
    //         let geocoder = new MapboxGeocoder(customOpts);
    //         geocoder.addTo(map);
    //     });
    // };

    // console.log($thisMap)

    // check is map is loaded
    // $: mapLoaded = () => {
    //     if ($map) {
    //         let loaded = $map.loaded();
    //         console.log('ya')
    //         return loaded;
    //     }
    // };

    // call addGeocoder when map is defined
    // $: $map && addGeocoder($map);

    // $: if(mapLoaded()) {addGeocoder($map)};
</script>
