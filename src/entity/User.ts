import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

//aqui eu criei a entidade de User
import { Post } from "./Post";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    firstName!: string;

    @Column()
    lastName!: string;

    @Column()
    email!: string;

    @OneToMany(() => Post, (post) => post.user)
    posts!: Post[];
}
