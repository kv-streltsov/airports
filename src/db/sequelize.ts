import {DataTypes, Sequelize} from "sequelize";
// import {Ticket} from "./model/model.tickets";

export const sequelize = 	new Sequelize('demo', 'postgres', '3230sas', {
	host: 'localhost',
	dialect: 'postgres',
});

export const Ticket = sequelize.define('ticket', {
	// Model attributes are defined here
	ticket_no: {
		type: DataTypes.STRING,
		primaryKey: true,
		allowNull: false,
	},
	book_ref: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	passenger_id: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	passenger_name: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
	contact_data: {
		type: DataTypes.JSONB
	}
}, {
	timestamps: false
});

export const Aircrafts = sequelize.define('aircrafts', {
	// Model attributes are defined here
	aircraft_code: {
		type: DataTypes.STRING,
		primaryKey: true,
		allowNull: false,
	},
	model: {
		type: DataTypes.JSONB,
		allowNull: false,
	},
	range: {
		type: DataTypes.INTEGER,
		allowNull: false,
	}
}, {
	timestamps: false
});





