<template>
  <div>
    <Home />
  </div>
</template>

<script setup>

const counter = useState('counter', () => Math.round(Math.random() * 1000));

</script>