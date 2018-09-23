exports.up = function(knex, Promise) {
	return knex.schema.createTable('users', table => {
		table.increments().primary();
		table
			.string('email')
			.unique()
			.notNullable();
		table
			.string('phone')
			.unique()
			.notNullable();
		table.string('firstname').notNullable();
		table.string('lastname');
		table.string('password').notNullable();
		table.timestamp('created_at', 6).defaultTo(knex.fn.now(6));
		table.boolean('isActive');
		table.integer('role');
		table.integer('images');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('users');
};
