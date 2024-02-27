<script lang="ts">
  import config from '../site.config.json'
  import logo from '$assets/logo.png?enhanced&w=100&h=100'
</script>

<header class="flex flex-col items-center justify-center">
  <div
    class="w-full h-28 md:h-40 md:rounded-t-lg bg-cover aos-init aos-animate"
    style="background-image:url('/images/cover.webp');background-position:center,bottom" />
  <div class="rounded-full bg-white border border-2 -mt-[60px] aos-init aos-animate">
    <div class="overflow-hidden rounded-full">
      <enhanced:img
        src={logo}
        alt={config.name}
        loading="lazy"
        class="duration-700 ease-in-out scale-100 blur-0 grayscale-0 rounded-full lg:hover:scale-105"
        style="color:transparent" />
    </div>
  </div>

  <div class="pt-5 px-8">
    <div class="flex flex-col justify-center items-center space-y-3 aos-init aos-animate">
      <div class="flex flex-col gap-1 items-center text-center">
        <h1 class="text-2xl font-medium">{config.name}</h1>
        <div class="flex gap-2 text-[15px] text-neutral-500">{config.address}</div>
      </div>

      <p class="text-center text-neutral-600 text-[15px] md:text-base mx-1.5 leading-relaxed">
        {config.bio}
      </p>
    </div>
  </div>
</header>
