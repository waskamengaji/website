<script lang="ts">
  import { page } from '$app/stores'

  let title = 'Terjadi Kesalahan'
  let caption = 'Maaf, terjadi kesalahan tidak terduga pada sisi server.'

  if ($page.status === 404) {
    title = 'Halaman Tidak Ditemukan'
    caption = 'Maaf, halaman yang kamu cari tidak dapat ditemukan.'
  }
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class="flex flex-col items-center text-center p-6 gap-1">
  <h1 class="text-xl font-medium">{title}</h1>
  <div class="flex gap-2 text-sm text-neutral-500">{caption}</div>
</div>
