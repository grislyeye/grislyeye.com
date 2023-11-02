const getYear = (new Date()).getFullYear();
const getMonth = (new Date()).getMonth() + 1;
const getDay = (new Date()).getDate();

module.exports = {
	helpers: {
		date: () => `${getYear}-${getMonth}-${getDay.toString().padStart(2, '0')}`,
    slug: (str) => str.replace(/[\W_]/g, '-').toLowerCase()
	}
}
