import { UserModel } from "src/users/entities/user.entity";
import { Column, JoinColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'tasks'
})
export class TaskModel{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 200})
    nome: String;

    @Column({ nullable: true })
    userId: number

    @ManyToOne(() => UserModel, (user) => user.id)
    @JoinColumn()
     user: UserModel[];


}export class Task {}
