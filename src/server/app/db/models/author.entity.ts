import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import Book from './book.entity';

@ObjectType()
@Entity({name: 'authors'})
export default class Author {

  @Field(type => ID)
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
