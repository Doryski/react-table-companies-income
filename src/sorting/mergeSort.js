const divide = (array, key = 'id', direction = 'asc') => {
	// return array without sorting if empty or has 1 item
	if (array.length < 2) {
		return array
	}
	const mid = Math.floor(array.length / 2)
	const smallOne = array.slice(0, mid)
	const smallTwo = array.slice(mid)
	return sort(
		divide(smallOne, key, direction),
		divide(smallTwo, key, direction),
		key,
		direction
	)
}

const sort = (smallOne, smallTwo, key, direction) => {
	const sorted = []
	while (smallOne.length && smallTwo.length) {
		if (
			direction === 'asc'
				? smallOne[0][key] <= smallTwo[0][key]
				: smallOne[0][key] >= smallTwo[0][key]
		) {
			sorted.push(smallOne.shift())
		} else {
			sorted.push(smallTwo.shift())
		}
	}
	const output = [...sorted, ...smallOne, ...smallTwo]
	return output
}

export default divide
