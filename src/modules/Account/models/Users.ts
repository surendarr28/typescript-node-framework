import { Table, Column, Model, HasOne, AutoIncrement, PrimaryKey, ForeignKey } from 'sequelize-typescript';

@Table({
    timestamps: true
})
export class Users extends Model<Users> {

    @AutoIncrement
    @PrimaryKey
    @Column
    id: number;

    @Column
    username: string;

    @Column
    password: string;
}