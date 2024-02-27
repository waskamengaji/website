<script lang="ts">
  import '../app.scss'

  import { updated } from '$app/stores'
  import Footer from '$components/Footer.svelte'
  import { beforeNavigate } from '$app/navigation'

  beforeNavigate(({ willUnload, to }) => {
    if ($updated && !willUnload && to?.url) {
      location.href = to.url.href
    }
  })
</script>

<main class="pb-0">
  <slot />
</main>

<Footer />
