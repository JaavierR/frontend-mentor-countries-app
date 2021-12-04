<script setup lang="ts">
import { SearchIcon } from '@heroicons/vue/solid'
defineProps<{ modelValue: string }>()
defineEmits<{ (e: 'update:modelValue', input: string): void }>()
</script>

<script lang="ts">
export default {
    inheritAttrs: false,
}
</script>

<template>
    <div class="relative rounded-md shadow-md" :class="$attrs.class">
        <div
            class="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none"
        >
            <SearchIcon class="w-5 h-5 text-white" />
        </div>
        <input
            v-bind="$attrs"
            type="text"
            class="block w-full py-4 text-sm font-semibold text-white placeholder-white border-none rounded-md pl-14 bg-dark-blue sm:text-sm focus:border-white focus:ring-white"
            :value="modelValue"
            @input="$emit('update:modelValue', ($event.target as any)?.value)"
        />
    </div>
</template>
