<template>
  <div>

    
    <div>yo!</div>

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