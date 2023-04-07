<template>
  <div>

    
    <ThreeCanvas />

    <!-- 
      <div class="h-test uppercase">
        home
      </div>

      <Fonts />

      <div>
        code: {{ counter }}
      </div>

      <div>
        <DataD3 />
        <Anime />
        <SVGTest />
      </div>
    -->

  </div>
</template>

<script setup>

const counter = useState('counter');

onMounted(() => {
  useTestFunction();
})

</script>

<style lang="scss" scoped>
.h-test {
  padding: 10px;
}
</style>