<template>
  <!-- TEXTAREA -->
  <textarea
    v-if="resolvedTag === 'textarea'"
    v-bind="forwardedAttrs"
    :value="stringValue"
    :class="baseClass"
    @input="onInput"
    :placeholder="placeholder || ''"
  />

  <!-- SELECT -->
  <select
    v-else-if="resolvedTag === 'select'"
    v-bind="forwardedAttrs"
    :value="stringValue"
    :class="baseClass"
    @change="onChange"
  >
    <option v-if="placeholder" disabled value="">
      {{ placeholder }}
    </option>

    <option
      v-for="(opt, i) in normalizedOptions"
      :key="i"
      :value="opt.value"
      :disabled="opt.disabled"
    >
      {{ opt.label }}
    </option>
  </select>

  <!-- INPUT -->
  <input
    v-else
    v-bind="forwardedAttrs"
    :type="type"
    :value="modelValue"
    :class="baseClass"
    @input="onInput"
    :placeholder="placeholder || ''"
  />
</template>

<script setup lang="ts">
import { computed, useAttrs } from "vue"

type Primitive = string | number
type Option =
  | Primitive
  | { label: string; value: Primitive; disabled?: boolean }
  | Record<string, any>

const attrs = useAttrs()

interface Props {
  modelValue?: string | number | null
  /**
   * text | email | password | number | textarea | select ...
   */
  type?: string
  /**
   * Para dropdowns: acepta strings/numbers, objetos {label,value}, o cualquier objeto usando keys
   */
  options?: Option[]
  /**
   * Para options tipo objeto genérico: qué campo usar como value/label
   */
  optionValueKey?: string
  optionLabelKey?: string

  /**
   * Placeholder útil para select (muestra option disabled al inicio)
   */
  placeholder?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: "",
  type: "text",
  options: () => [],
  optionValueKey: "value",
  optionLabelKey: "label",
  placeholder: "",
})

const emit = defineEmits<{
  (e: "update:modelValue", value: string | number | null): void
}>()

const resolvedTag = computed(() => {
  if (props.type === "textarea") return "textarea"
  if (props.type === "select") return "select"
  return "input"
})

/**
 * Para <select>, el value siempre viaja como string en el DOM.
 * Aquí lo normalizamos a string para binding.
 */
const stringValue = computed(() => (props.modelValue ?? "") + "")

const baseClass = computed(() => [
  "input input-primary font-normal border-neutral px-4 border shadow-sm w-full",
  props.type === "textarea" ? "py-4 min-h-24 max-h-40" : "",
  props.type === "select" ? "cursor-pointer" : "",
])

/**
 * Evita pasarle "type" al select/textarea y evita que placeholder se duplique como attr.
 */
const forwardedAttrs = computed(() => {
  const a: Record<string, any> = { ...attrs }
  // si te estorba, puedes bloquear attrs específicos aquí:
  // delete a.type
  return a
})

const normalizedOptions = computed(() => {
  return (props.options || []).map((opt) => {
    if (typeof opt === "string" || typeof opt === "number") {
      return { label: String(opt), value: opt, disabled: false }
    }

    // si ya viene como {label,value}
    if ("label" in opt && "value" in opt) {
      return {
        label: String((opt as any).label),
        value: (opt as any).value as Primitive,
        disabled: Boolean((opt as any).disabled),
      }
    }

    // objeto genérico: usa keys
    const value = (opt as any)[props.optionValueKey]
    const label = (opt as any)[props.optionLabelKey]
    return {
      label: String(label ?? value ?? ""),
      value: (value ?? label ?? "") as Primitive,
      disabled: Boolean((opt as any).disabled),
    }
  })
})

function onInput(e: Event) {
  const target = e.target as HTMLInputElement | HTMLTextAreaElement
  emit("update:modelValue", target.value)
}

function onChange(e: Event) {
  const target = e.target as HTMLSelectElement
  const raw = target.value

  // Si tu input soporta type="number" en input normal, esto lo mantiene.
  // Para select: intenta convertir a number si el modelValue actual es number.
  if (typeof props.modelValue === "number") {
    const asNum = Number(raw)
    emit("update:modelValue", Number.isNaN(asNum) ? null : asNum)
    return
  }

  emit("update:modelValue", raw === "" ? null : raw)
}
</script>
