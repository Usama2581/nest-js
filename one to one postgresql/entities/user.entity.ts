import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Profile } from './profile.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    email: string;
    
    @Column()
    password: string;

    @Column()
    age: number;

    //cascade true ----- to add coming data at a time in all tables, used to add data
    // eager true ---- to convert relation to eager which means profile data will aslo returned with user 
    // lazy is default relation, if eager is false which means profile data will not be loaded and we should add this code to get data from db find({ relations: { profile: true }})  

    @OneToOne(() => Profile, { cascade: true, eager: true, onDelete: 'CASCADE', onUpdate:'CASCADE' })
    @JoinColumn()
    profile: Profile;
}
