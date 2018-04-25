<template>
  <div>
    <transition name="mfade" mode="out-in">>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script src="./user.js"></script>

<style scoped>
.mfade-enter-active,
.mfade-leave-active {
  transition-property: opacity;
  transition-duration: 0.10s;
}

.mfade-enter-active {
  transition-delay: .10s;
}

.mfade-enter,
.mfade-leave-active {
  opacity: 0
}
</style>