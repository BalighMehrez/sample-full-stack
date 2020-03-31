import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import Book from './book.entity';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
@Entity()
export default class Author {

  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @CreateDateColumn({name: 'created_at'})
  createdAt: Date;

  @Field()
  @UpdateDateColumn({name: 'updated_at'})
  updatedAt: Date;

  // Associations
  @OneToMany(() => Book, book => book.authorConnection)
  bookConnection: Promise<Book[]>;

}
