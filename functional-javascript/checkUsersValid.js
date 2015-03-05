"use strict";

function checkUsersValid(goodUsers) {
	return function(submittedUsers) {
		return submittedUsers.every( function(user) {
			return goodUsers.some( function(good) {
				if ( user.id === good.id ) {
					return true;
				};

				return false;
			});
		})
	};
}

module.exports = checkUsersValid