<script lang="ts">
  import config from '../site.config.json'
  import Links from '$components/Links.svelte'
  import Header from '$components/Header.svelte'
  import Contact from '$components/Contact.svelte'
  import Socials from '$components/Socials.svelte'
  import Breakline from '$components/Breakline.svelte'
</script>

<svelte:head>
  <title>{config.name}</title>
</svelte:head>

<Header />

<div class="p-6 space-y-5">
  <Socials />
  <Breakline />
  <Links />
  <Breakline />
  <Contact />
</div>
