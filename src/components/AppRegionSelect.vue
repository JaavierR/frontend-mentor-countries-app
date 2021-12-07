<script setup lang="ts">
defineProps<{ modelValue: string | number }>()
defineEmits<{ (e: 'update:modelValue', change: string | number): void }>()

const { t } = useI18n()

const options = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania', 'Antarctic']
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
        class="block py-4 text-sm font-semibold border-none rounded-md shadow-md dark:placeholder-white dark:bg-dark-blue sm:text-sm focus:border-dark-blue focus:ring-dark-blue dark:focus:border-white dark:focus:ring-white"
        :value="modelValue"
    >
        <option value="all">{{ t('region_filter') }}</option>
        <option
            v-for="option in options"
            :key="option"
            :value="option"
            :selected="option === modelValue"
        >
            {{ t(`region.${option}`) }}
        </option>
    </select>
</template>
