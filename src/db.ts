import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost:5432/be-gadget-store',
  {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
