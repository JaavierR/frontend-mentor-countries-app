<script setup lang="ts">
defineProps<{ title: string; info?: string | number }>()
</script>

<template>
    <p>
        <span class="font-semibold"> {{ title }}: </span>
        {{ info }}
    </p>
</template>
