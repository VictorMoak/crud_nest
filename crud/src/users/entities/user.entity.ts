import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'users'
})
export class UserModel{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 200})
    nome: String;

    @Column({length: 60})
    telefone: String; 
}