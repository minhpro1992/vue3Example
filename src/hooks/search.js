import { ref, computed, watch } from 'vue'

export default function useSearch(items, searchProp) {
  const enteredSearchTerm = ref('')
  const activeSearchTerm = ref('')

  const availableItems = computed(function () {
    let filteredItems = []
    if (activeSearchTerm.value) {
      const results = items.value.filter((item) => {
        const fullName = item[searchProp] + ''
        return fullName.toLowerCase().includes(activeSearchTerm.value)
      })
      filteredItems = results
    } else if (items.value) {
      filteredItems = items.value
    }
    return filteredItems
  })

  watch(enteredSearchTerm, function (newValue) {
    const timeout = setTimeout(() => {
      if (newValue === enteredSearchTerm.value) {
        activeSearchTerm.value = newValue
      }
    }, 300)
    ;() => {
      clearTimeout(timeout)
    }
  })

  function updateSearch(val) {
    enteredSearchTerm.value = val
  }

  return {
    enteredSearchTerm,
    availableItems,
    updateSearch
  }
}
