import { ref, toValue } from 'vue'

const selectedCheckedBoxes = ref([])

export function useSelectCheckBoxes(data) {
    
    const checkedBoxes =  new Set()

    const selectAllCheckBoxes = () => {   
        toValue(data).map((service) => {
            checkedBoxes.add(service.id)
        })
        selectedCheckedBoxes.value = Array.from(checkedBoxes)
    }

    const deSelectAllCheckBoxes = () =>  {
        checkedBoxes.clear()
        selectedCheckedBoxes.value = Array.from(checkedBoxes)
    }

    const toggleAllCheckBoxes = () => {
        console.log('count',selectedCheckedBoxes.value)
        if(selectedCheckedBoxes.value.length > 0) {
            console.log('deselecting all checkboxes')
            return deSelectAllCheckBoxes()
        }                   
        console.log('checking all checked boxes')
        return selectAllCheckBoxes()
    }

    return {
        toggleAllCheckBoxes,
        selectedCheckedBoxes
    }
}