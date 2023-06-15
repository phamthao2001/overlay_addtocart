# Overlay Add to cart

## Description

Add to cart effect to use in order shop vue application

## Install

```
#npm
npm i overlay_addtocart
```

## Import in Vue

```javascript
import Vue from "vue";
import App from "./App.vue";
import overlay from "overlay_addtocart";

Vue.use(overlay);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
```

## Using


```javascript
<template>
  <div>
    <button @click="test">a</button>
    <div ref="start" class="start"></div>
    <div ref="end" class="end"></div>
  </div>
</template>

<script>
import ItemCompo from '@/components/ItemCompo'
export default {
  methods: {
    test() {
      this.$overlay({
        from: ".start",
        to: ".end",
        duration: 2000, // ms
        startScale: 0.9,
        startOpacity: 0.9,
        endScale: 0.1,
        endOpacity: 0.1,
        render: this.$createElement(ItemCompo)  // >> VNode
        done: () => {
          alert("done");
        },
      });
    },
  },
};
</script>
```

>without using query selector

```javascript
...
        from: this.$refs.start,
        to: this.$refs.end,
...
```

## Options

| Options       | Accept                            | Default   | Note                                  |
| :-----------: | :-------------------------------: | :-------: | :-----------------------------------: |
| from          | string(query selector), VDOM, DOM | body      | container where start effect          |
| to            | string(query selector), VDOM, DOM | body      | container where end effect            |
| duration      | number (ms)                       | 1000      | time effect                           |
| startScale    | number                            | 1         | item scale at the start effect        |
| startOpacity  | number                            | 1         | item opacity at the start effect      |
| endScale      | number                            | 0         | item scale at the end effect          |
| endOpacity    | number                            | 0         | item opacity at the end effect        |
| render        | VNode                             | null      | component will render in slot default |
| done          | function                          | null      | function active when after effect     |

>phamthao2001