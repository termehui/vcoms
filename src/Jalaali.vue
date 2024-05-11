<template>
    <div style="display: inline-block">
        {{
            val
                ? format.includes("ago")
                    ? format.replace("ago", val!.fromNow())
                    : val!.format(format)
                : alter
        }}
    </div>
</template>

<script lang="ts" setup>
import { computed } from "@vue/runtime-core";
import { parse } from "@termehui/date-utils";

const props = defineProps({
    format: {
        type: String,
        default: "jDD jMMMM jYYYY ساعت HH:mm:ss",
    },
    alter: {
        type: String,
        default: "-",
    },
    value: { required: true },
});

const val = computed(() => {
    const v = parse((props.value as any) || "");
    return v && v != null && v.isValid() ? v.locale("fa") : null;
});
</script>
