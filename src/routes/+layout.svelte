<script>

</script>

<slot />

<footer>
  lorem ipsum sit dolor amet<br>
  lorem ipsum sit dolor amet<br>
  lorem ipsum sit dolor amet<br>
  lorem ipsum sit dolor amet<br>
</footer>

<style>
  :global(:root) {
    /* font-family: 'Revolution Sans ASCII', 'Revolution Sans', 'system-ui', 'sans-serif'; */
    
    --fg: 216, 210, 244;
    --container: 73, 57, 47;
    --dim: 182, 168, 158;
    
    --overlay-brick: linear-gradient(rgba(21, 8, 2, 25%), rgba(21, 8, 2, 25%));
  }
  
  :global(main) {
    background: repeat url("$lib/textures/brick.svg");
    min-height: calc(100vh - 4em);
  }
  
  /* Footer */
  
  footer {
    background: var(--overlay-brick-10), repeat url("$lib/textures/brick.svg");
    min-width: 100vw;
    padding: 4em;
  }
  
  /* Headers */ 
  
  :global(h1, h2, h3, h4, h5, h6) {
    /* font-family: 'Revolution Sans Title', 'Revolution Sans ASCII', 'Revolution Sans', system-ui, sans-serif; */
    font-weight: bolder;
    font-size: inherit;
  }

  :global(h1) {
    font-size: 2em;
  }

  :global(h2) {
    font-size: 1.5em;
  }

  :global(h3) {
    font-size: 1.3em;
  }

  :global(h4) {
    font-size: 1.2em;
  }

  @media (min-width: 640px) {
    :global(h1) {
      font-size: 3em;
    }

    :global(h2) {
      font-size: 2em;
    }

    :global(h3) {
      font-size: 1.8em;
    }

    :global(h4) {
      font-size: 1.5em;
    }
  }

  @media (min-width: 1024px) {
    :global(h1) {
      font-size: 4em;
    }

    :global(h2) {
      font-size: 2em;
    }

    :global(h3) {
      font-size: 1.5em;
    }

    :global(h4) {
      font-size: 1.3em;
    }
  }
  
  /* Screw browser stylesheets */
  
  :global(html, body) {
    padding: 0;
    margin: 0;
  }
  
  :global(*, ::before, ::after) {
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: black;
  }

  :global(img, svg, video, canvas, audio, iframe, embed, object) {
    display: block;
  }

  :global(a, :visited) {
    color: inherit;
    text-decoration: underline dotted;
  }

  :global(img, video) {
    max-width: 100%;
    height: auto;
  }

  :global(blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre) {
    margin: 0;
    padding: 0;
  }

  :global(input, button) {
    font-family: inherit;
    font-size: 1em;
    /* background: rgb(var(--fg)); */
    /* color: rgb(var(--bg)); */
  }
</style>