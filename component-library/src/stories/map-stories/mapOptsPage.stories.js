import MapOptsPage from './storybook-components/MapOptsPage.svelte'
import { styles } from '$lib/utils/options/map-style-options.js'
export default {
  title: '<Map>/mapOpts',
  component: MapOptsPage
};


export const DefaultMapContainer = {
  args: {
    title: 'Default Map Container',
    codeBlock: `<MapContainer/>`
  }
}

export const ChangeMapStyle = {
  args: {
    mapOpts: {
      'style': styles.satelliteStreets,
    },
    title: 'Change Map Style',
    codeBlock: 
`<MapContainer mapOpts={{style: styles.satelliteStreets}}/>`
  }
}

export const TurnOffInteractivity = {
  args: {
    mapOpts: {
      'interactive': false,
      'style': styles.courtBluePink
    },
    title: 'Turn Off Interactivity',
    codeBlock: 
`<MapContainer mapOpts={{
    interactive: false, 
    style: styles.courtBluePink
}}/>`,
  }
}

export const ChangeProjection = {
  args: {
    mapOpts: {
      'projection': 'lambertConformalConic',
      'style': styles.courtEarthy
    },
    title: 'Change Projection',
    codeBlock: `
<MapContainer mapOpts={{
projection: 'lambertConformalConic',
style: styles.courtEarthy
}}/>`
  }
}

export const ChangeSeveralOptions = {
  args: {
    mapOpts: {
      'projection': 'globe',
      'zoom': 1.4,
      'bearing': 90,
      'pitch': -50,
      'style': styles.satellite,
      'customAttribution': 'CUSTOM ATTRIBUTION TEXT HERE'
    },
    title: 'Change Several mapOpts',
    codeBlock: `
<MapContainer 
mapOpts={{
    projection: 'globe',
    zoom: 1.4,
    bearing: 90,
    pitch: -50,
    style: styles.satellite,
    customAttribution: 'CUSTOM ATTRIBUTION TEXT HERE'/>`,
  }
}
