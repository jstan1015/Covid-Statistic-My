<template>
    <footer class="footer container-fluid bg-dark">
      <small class="text-muted fw-bold">CovidStatisticMy@2021</small>
    </footer>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    style: {
      type: String,
      default: null
    },
    chartID: {
      type: String,
      default: null
    },
  },
  computed: {
    btnClass() {
      return "btn-"+this.style
    },
  },
  methods: {
    showChart(id){
        var canvas = document.querySelectorAll("canvas");
        canvas.forEach(x => x.style.display = "none");
        document.getElementById(id).style.display = "block"  
    }
  },
}
</script>

<style scoped>
.footer{
  padding:5px;
  position:fixed;
  bottom:0;
}
</style>