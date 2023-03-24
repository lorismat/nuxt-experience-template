<template>
  <div class="to-anim">
    <div v-for="el in elToAnim">
      {{ el }}
    </div>
  </div>
</template>

<script setup>
import anime from 'animejs';

const elToAnim = ["blip", "blap", "blup"];

onMounted(() => {
  anime({
    targets: '.to-anim div',
    translateX: 250,
    delay: anime.stagger(100),
    duration: 800
  });
})

</script>