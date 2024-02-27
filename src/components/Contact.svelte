<script lang="ts">
  import Fa from 'svelte-fa'
  import config from '../site.config.json'
  import Confetti from 'phosphor-svelte/lib/Confetti'
  import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons'
</script>

<section class="space-y-5">
  <div class="flex items-center gap-2 px-2">
    <Confetti weight="duotone" size="24" />
    <h2 class="font-medium text-neutral-600">Hubungi kami</h2>
  </div>

  <div
    class="bg-[#94d7c5] text-neutral-900 border p-8 rounded-xl space-y-5 bg-no-repeat bg-right"
    style="background-image:url('/images/bg-gradient-2.svg')">
    <Fa icon={faEnvelopeOpen} size="24" class="text-neutral-800" />

    <div class="space-y-3">
      <div class="font-medium text-lg md:text-xl">Melalui surel</div>

      <div class="hover:underline text-neutral-800 text-lg md:text-lg cursor-pointer">
        {config.email}
      </div>
    </div>

    <p class="text-sm md:text-base text-neutral-700 leading-relaxed">
      InsyaAllah akan segera kami beri tanggapan setelah surel kami terima.
    </p>
  </div>
</section>
