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

<svelte:head>
  <script
    defer
    src="https://eu.umami.is/script.js"
    data-website-id="deb7b694-7d6a-4f2b-a3f3-8d6378202879"></script>
</svelte:head>

<main class="pb-0">
  <slot />
</main>

<Footer />
