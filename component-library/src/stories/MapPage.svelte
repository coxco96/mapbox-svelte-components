<script>
    export let title;
    export let codeBlock;
    export let content;

</script>

<div class='m-2 p-2 page-container'>
<h1>{title}</h1>

<div class="accordion" id="accordionExample">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Map
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <slot/>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Info
        </button>
      </h2>
      <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body">
         {content}
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Component Code
        </button>
      </h2>
      <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body">
         <code>{codeBlock}</code>
        </div>
      </div>
    </div>
  </div>



<!-- <div>{content}</div>
<div><code>{codeBlock}</code></div>
<slot/> -->
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
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>

</svelte:head>



<style>
		h1 {
			font-family: 'Volkorn', serif;
			line-height: 1.3;
			letter-spacing: .25rem;
			font-weight: 700;
            font-size: calc(2.5rem + .25vw)
		}

        .page-container {
            margin: 2px;
        }

        code {
            white-space: pre-wrap;
        }


</style>