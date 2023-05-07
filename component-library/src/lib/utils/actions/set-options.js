
/* used for options supplied in MapContainer prop
to update default map, source, layer, or geocoder options 
to options supplied in MapContainer prop */

export function setOptions(options, newOpts) {
    Object.keys(newOpts).forEach(option => {
        let selection = newOpts[option]
        options[option] = selection;
    });
    return options;
}