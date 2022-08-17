import { STRING, TEXT, UUID, UUIDV4 } from 'sequelize';
import db from '../data/Database';

const Reviews = db.define(
    'reviews',
    {
        id: {
            type: UUID,
            defaultValue: UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        title: {
            type: STRING,
            allowNull: false,
        },
        description: {
            type: TEXT,
            allowNull: true,
        },
    },
    {
        freezeTableName: true,
    }
);

(async () => {
    await db.sync();
})();

export default Reviews;
