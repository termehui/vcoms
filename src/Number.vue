<template>
    <div style="display: inline-block; direction: ltr">
        {{ formatNumber(value, separator || ",") }}
    </div>
</template>

<script lang="ts" setup>
import { formatNumber } from "@termehui/utils";
defineProps({ value: Number, separator: String });
</script>
