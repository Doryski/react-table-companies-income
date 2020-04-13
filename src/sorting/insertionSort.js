const insertionSort = (array, key = 'id', direction = 'asc') => {
	for (let outer = 1; outer < array.length; outer++) {
		for (let inner = 0; inner < outer; inner++) {
			if (
				direction === 'asc'
					? array[outer][key] < array[inner][key]
					: array[outer][key] > array[inner][key]
			) {
				const [element] = array.splice(outer, 1)
				array.splice(inner, 0, element)
			}
		}
	}
	return array
}

export default insertionSort
