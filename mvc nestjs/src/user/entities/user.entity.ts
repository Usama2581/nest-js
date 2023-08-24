// import { Entity } from "typeorm";

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    age: number;

    @Column()
    gender: string;
}

// import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


// @Entity()
// export class User {
    
//     @PrimaryGeneratedColumn()
//     id: number;

//     @Column()
//     name: string;
    
//     @Column()
//     age: number;

//     @Column()
//     password: string;

//     @Column()
//     email: string;

//     @Column()
//     gender: string;

// }

