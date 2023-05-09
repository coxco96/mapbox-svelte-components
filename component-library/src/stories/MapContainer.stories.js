import MapContainer from '$lib/components/MapContainer.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
export default {
  title: 'Examples/MapContainer',
  component: MapContainer
};


export const DefaultMapContainer = {
  args: {
    title: 'Default Map Container',
    codeBlock: `<MapContainer/>`,
    content: 'come back to this'
  }
}

export const AddGeocoder = {
  args: {
    addGeocoder: true,
    title: 'Add a Geocoder',
    codeBlock: `<MapContainer addGeocoder={true}>`,
    content: `content here`
  }
}

export const ChangeMapStyle = {
    args: {
      mapOpts: {
        'style': 'mapbox://styles/mapbox/light-v10',
      },
      title: 'Change Map Style',
      codeBlock: 
`<MapContainer mapOpts={{
      style: 'mapbox://styles/mapbox/light-v10'
}}/>`,
      content: 'come back to this'
    }
  }

  export const InteractionOff = {
    args: {
      mapOpts: {
        'interactive': false,
        'style': 'mapbox://styles/coxco96/clfx9b01p004i01l8qojjofqh'
      },
      title: 'Interactive Off',
      codeBlock: 
`<MapContainer mapOpts={{
      interactive: false, 
      style: 'mapbox://styles/coxco96/clfx9b01p004i01l8qojjofqh'
}}/>`,
content: 'come back to content!'
    }
  }

  export const ChangeProjection = {
    args: {
      mapOpts: {
        'projection': 'globe',
        'zoom': 0,
        'style': 'mapbox://styles/coxco96/clam405uw000215qwfzg4hejq'
      },
      title: 'Change Projection',
      codeBlock: `
<MapContainer mapOpts={{
  projection: 'globe',
  zoom: 0,
  style: 'mapbox://styles/coxco96/clam405uw000215qwfzg4hejq'
}}/>`,
    content: 'come back to text'
    }
  }

  export const GeoAndStyle = {
    args: {
      mapOpts: {
        'projection': 'globe',
        'zoom': 1.5,
        'center': [-87, 37],
        'bearing': 5,
        'style': 'mapbox://styles/coxco96/clam3w1aq005d15qmwtbma0l2'
      },
      addGeocoder: true,
      title: 'Add Geocoder',
      codeBlock: `
<MapContainer 
  mapOpts={{
      projection: 'globe',
      zoom: 1.5,
       center: [-87, 37],
      bearing: 5,
      style: 'mapbox://styles/coxco96/clam3w1aq005d15qmwtbma0l2'
      }}, 
  addGeocoder: {true}/>`,
  content: 'content here'
    }
  }

