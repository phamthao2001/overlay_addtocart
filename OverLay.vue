<template>
  <div
    :style="`
        --positionST: ${positionSTop}px;
        --positionSL: ${positionSLeft}px;
        --positionET: ${positionETop}px;
        --positionEL: ${positionELeft}px;
        --duration: ${duration}ms;
        --endScale: ${endScale};
        --endOpacity: ${endOpacity};
        --startScale: ${startScale};
        --startOpacity: ${startOpacity};
      `"
  >
    <div class="overlay-fade">
      <slot>
        <div class="default"></div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "OverLay",
  data() {
    return {
      positionSTop: 200,
      positionSLeft: 200,
      positionETop: 600,
      positionELeft: 600,
      endScale: 0,
      endOpacity: 0,
      startScale: 1,
      startOpacity: 1,
      duration: 1000,
    };
  },
};
</script>

<style lang="scss" scoped>
::v-deep .overlay-fade {
  position: fixed;
  top: var(--positionST);
  left: var(--positionSL);
  width: auto;
  height: auto;
  opacity: 0;
  animation: fadeOverlay var(--duration) ease-in-out;
}

@keyframes fadeOverlay {
  0% {
    transform: translate(-50%, -50%) scale(var(--startScale));
    opacity: var(--startOpacity);
  }
  100% {
    transform: translate(
        calc(var(--positionEL) - var(--positionSL) - 50%),
        calc(var(--positionET) - var(--positionST) - 50%)
      )
      scale(var(--endScale));
    opacity: var(--endOpacity);
  }
}
.default {
  width: 200px;
  height: 200px;
  background-color: green;
}
</style>
