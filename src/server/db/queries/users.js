const bcrypt = require('bcryptjs');
const knex = require('../connection');

function addUser(user) {
	const salt = bcrypt.genSaltSync();
	const hash = bcrypt.hashSync(user.password, salt);
	return knex('users')
		.insert({
			firstname: user.firstname,
			lastname: user.lastname,
			email: user.email,
			phone: user.phone,
			password: hash,
			isActive: true,
		})
		.returning('*');
}

module.exports = {
	addUser,
};
