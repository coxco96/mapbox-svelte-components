/** @type { import('@storybook/svelte').Preview } */
const preview = {
  parameters: {
    options: {
      storySort: {
        order:['Start Here', ['introduction', 'docs & tutorials'], '<MapContainer>', '<Map>', ['mapOpts', 'mapScript'], '<Geocoder>', ['addGeocoder', 'geocoderOpts', 'geoprocess'], '<SourceLayer>', ['data', 'sourceOpts', 'layerOpts']],
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
