<script>
    import { options } from "./../utils/options/geocoder-options.js";
    import { randomString } from "./../utils/actions/random-string.js";
    import { mapbox, mapKey } from "./../utils/mapbox/mapbox.js";
    import { getContext, onMount } from "svelte";

    randomString(7);
    // EXTERNAL LIBRARIES
    import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
    import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

    // EXPORTS
    export let geocoderOpts = undefined; // see: https://github.com/mapbox/mapbox-gl-geocoder/blob/main/API.md;
    // merge default options with requested options

    // create and add geocoder function
    const addGeocoder = (map) => {
        let customOpts = {
            ...options,
            ...geocoderOpts,
            accessToken: mapbox.accessToken,
            mapboxgl: mapbox,
        };
        map.on("load", () => {
            let geocoder = new MapboxGeocoder(customOpts);
            geocoder.addTo(map);
        });
    };

    // access this map instance
    let map = getContext(mapKey).getMap();

    // call addGeocoder when map is defined
    $: $map && addGeocoder($map);

    // // GET CONTEXT

    // console.log($map);
    // $: if ($map) {
    //     onMount(async () => {
    //         $map.on("load", async () => {
    //             console.log($map);
    //         });
    //     });
    // }

    // let divId = getContext(mapKey).randomId();

    /* it works with $map with one map/page and with thisMap with multiple maps on page?? */

    // let thisMap = $map;
    // $: if ($map) {
    //     let thisMap = $map;
    //     $map.on("load", () => {
    //         let geocoder = new MapboxGeocoder(customOpts);
    //         geocoder.addTo($map);
    //     });
    // } else {
    //     console.log("no map");
    // }
</script>
