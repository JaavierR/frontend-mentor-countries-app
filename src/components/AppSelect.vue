<script setup lang="ts">
defineProps<{ modelValue: string | number; options: string[] | number[] }>()
defineEmits<{ (e: 'update:modelValue', change: string | number): void }>()
</script>

<template>
    <select
        v-bind="{
            ...$attrs,
            onChange: ($event) => {
                $emit('update:modelValue', ($event.target as any).value)
            },
        }"
        id="filterByRegion"
        name="filterByRegion"
        class="block py-4 text-sm font-semibold text-white placeholder-white border-none rounded-md shadow-md bg-dark-blue sm:text-sm focus:ring-white focus:border-white"
        :value="modelValue"
    >
        <option
            v-for="option in options"
            :key="option"
            :value="option"
            :selected="option === modelValue"
        >
            {{ option }}
        </option>
    </select>
</template>
