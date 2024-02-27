<script lang="ts">
  import classnames from 'classnames'
  import config from '../site.config.json'
  import Youtube from 'svelte-bootstrap-icons/lib/Youtube.svelte'
  import Twitter from 'svelte-bootstrap-icons/lib/TwitterX.svelte'
  import Facebook from 'svelte-bootstrap-icons/lib/Facebook.svelte'
  import Telegram from 'svelte-bootstrap-icons/lib/Telegram.svelte'
  import Whatsapp from 'svelte-bootstrap-icons/lib/Whatsapp.svelte'
  import Instagram from 'svelte-bootstrap-icons/lib/Instagram.svelte'

  const names: Record<string, string> = {
    facebook: 'Facebook',
    instagram: 'Instagram',
    twitter: 'Twitter',
    telegram: 'Telegram',
    whatsapp: 'WhatsApp',
    youtube: 'YouTube',
  }

  const icons: Record<string, any> = {
    facebook: Facebook,
    instagram: Instagram,
    twitter: Twitter,
    telegram: Telegram,
    whatsapp: Whatsapp,
    youtube: Youtube,
  }

  const classes: Record<string, string> = {
    facebook: 'text-[#316ff6] hover:bg-[#316ff6]',
    instagram: 'text-pink-600 hover:bg-pink-600',
    twitter: 'hover:bg-black',
    telegram: 'text-[#0088cc] hover:bg-[#0088cc]',
    whatsapp: 'text-[#25d366] hover:bg-[#25d366]',
    youtube: 'text-[#cd201f] hover:bg-[#cd201f]',
  }

  const socials: Record<string, string | null> = config.socials
</script>

<section class="flex justify-center gap-x-3">
  {#each Object.keys(socials) as key}
    {#if socials[key]}
      <a
        href={socials[key]}
        target="_blank"
        rel="noopener noreferrer"
        class={classnames(
          'bg-white p-3 border hover:shadow-none rounded-full transition-all duration-300 hover:shadow hover:scale-105 hover:text-white shadow-sm',
          classes[key]
        )}
        aria-label={names[key]}
        title={names[key]}>
        <svelte:component this={icons[key]} />
      </a>
    {/if}
  {/each}
</section>
