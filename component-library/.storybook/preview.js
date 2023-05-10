/** @type { import('@storybook/svelte').Preview } */
const preview = {
  parameters: {
    options: {
      storySort: {
        order:['Start Here', ['introduction', 'what is this?', 'to-dos & next steps','docs & tutorials'], '<MapContainer>', '<Map>', ['mapOpts', 'mapScript'], '<Geocoder>', ['addGeocoder', 'geocoderOpts', 'geoprocess'], '<SourceLayer>', ['data', 'sourceOpts', 'layerOpts'], 'utils', ['actions', 'options', 'mapbox']],
      }
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
