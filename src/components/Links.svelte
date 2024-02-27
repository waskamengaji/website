<script lang="ts">
  import * as bi from 'svelte-boxicons'
  import config from '../site.config.json'
  import LinkBreak from 'phosphor-svelte/lib/LinkBreak'

  type Links = {
    icon: any
    label: string
    url: string
    background: string
  }

  const box: Record<string, any> = bi
  const links: Links[] = config.links
</script>

<section class="space-y-4">
  <div class="flex items-center gap-2 px-2">
    <LinkBreak weight="duotone" size="24" />
    <h2 class="font-medium text-neutral-600">Tautan</h2>
  </div>

  <div class="flex flex-col w-full gap-y-3">
    {#each links as link}
      <a
        class="relative inline-flex items-center justify-start py-4 pl-4 pr-14 overflow-hidden font-medium text-neutral-800 transition-all duration-150 ease-in-out rounded-lg hover:pl-12 hover:pr-6 bg-white group border shadow-sm cursor-pointer"
        href={link.url}
        target="_blank">
        <span
          class="absolute bottom-0 left-0 w-full h-0.5 transition-all duration-150 ease-in-out group-hover:h-full"
          style="background-color:{link.background}" />

        <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
          <svg
            class="w-5 h-5 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </span>

        <span
          class="absolute left-0 pl-4 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
          <svg
            class="w-5 h-5 text-green-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </span>

        <div class="flex items-center gap-3">
          <span class="group-hover:hidden">
            <svelte:component this={box[link.icon]} size="21" class="text-neutral-600" />
          </span>

          <span
            class="relative w-full text-[15px] md:text-base text-left transition-colors duration-200 ease-in-out group-hover:text-white">
            {link.label}
          </span>
        </div>
      </a>
    {/each}
  </div>
</section>
