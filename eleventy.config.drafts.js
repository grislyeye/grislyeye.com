function eleventyComputedPermalink() {
	return (data) => {
		if(data.tags && data.tags.includes("drafts")) {
			return false;
		}

		return data.permalink;
	}
};

function eleventyComputedExcludeFromCollections() {
	return (data) => {
		if(data.tags && data.tags.includes("drafts")) {
			return true;
		}

		return data.eleventyExcludeFromCollections;
	}
};

module.exports.eleventyComputedPermalink = eleventyComputedPermalink;
module.exports.eleventyComputedExcludeFromCollections = eleventyComputedExcludeFromCollections;

module.exports = eleventyConfig => {
	eleventyConfig.addGlobalData("eleventyComputed.permalink", eleventyComputedPermalink);
	eleventyConfig.addGlobalData("eleventyComputed.eleventyExcludeFromCollections", eleventyComputedExcludeFromCollections);
}
