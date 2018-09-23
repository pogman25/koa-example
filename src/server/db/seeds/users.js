const bcrypt = require('bcryptjs');

exports.seed = (knex, Promise) => {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync('johnson', salt);

	return knex('users')
		.del()
		.then(() => {
			return Promise.join(
				knex('users').insert({
					firstname: 'Alex',
					lastname: 'Pogman',
					password: hash,
					email: 'sapogi21@yandex.ru',
					phone: '+79054086789',
					isActive: true,
				})
			);
		});
};
