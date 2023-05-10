<script>
  export let title;
  export let codeBlock;
</script>

<div>
  <h1 style='margin-left: 65px; margin-bottom: 20px;'>{title}</h1>
  <div>
    <!-- map goes here -->
    <slot /> 
  </div>
  <div style='margin-left: 65px; margin-top: 25px;'>
    <code>{codeBlock}</code>
  </div>
</div>



<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link
		href="https://fonts.googleapis.com/css2?family=Old+Standard+TT:wght@700&family=Questrial&family=Unica+One&family=Vollkorn:wght@400;700;800&display=swap"
		rel="stylesheet"> 

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
</svelte:head>

<style>
  h1 {
    font-size: 32px;
  }

  div {
    font-family: 'Vollkorn', 'sans-serif';
    font-size: 20px;
  }
</style>

