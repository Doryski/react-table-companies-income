const sort = (data, key = 'id', direction = 'asc') => {
	return data.sort((a, b) => {
		if (direction === 'asc') {
			return a[key] > b[key] ? 1 : -1
		} else {
			return a[key] < b[key] ? 1 : -1
		}
	})
}

export default sort
