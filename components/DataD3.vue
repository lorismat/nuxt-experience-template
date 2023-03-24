<template>
  <div>
    d3 component
  </div>
</template>

<script setup>
import * as d3 from 'd3';

function d3Fetch() {
  d3.json('/data/data.json').then(data => {
    console.log(data);    
  });
}

onMounted(() => {
  d3Fetch();
})

</script>
