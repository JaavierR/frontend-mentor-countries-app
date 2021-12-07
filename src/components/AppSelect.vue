<script setup lang="ts">
interface Option {
    value: number | string
    name: string
}

defineProps<{ modelValue: string | number; options: Option[] }>()
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
        class="block py-4 text-sm font-semibold border-none rounded-md shadow-md dark:placeholder-white pl-14 dark:bg-dark-blue sm:text-sm focus:border-dark-blue focus:ring-dark-blue dark:focus:border-white dark:focus:ring-white"
        :value="modelValue"
    >
        <option
            v-for="option in options"
            :key="option.value"
            :value="option.value"
            :selected="option.value === modelValue"
        >
            {{ option.name }}
        </option>
    </select>
</template>
