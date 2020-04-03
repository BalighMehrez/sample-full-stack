import {MigrationInterface, QueryRunner} from "typeorm";

export class undefinedreateDb1585916629115 implements MigrationInterface {
    name = 'undefinedreateDb1585916629115'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "genres" ("id" SERIAL NOT NULL, "genre_name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_80ecd718f0f00dde5d77a9be842" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "books_genres" ("id" SERIAL NOT NULL, "book_id" integer NOT NULL, "genre_id" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_761f8cb09516dfc913a37905bc2" PRIMARY KEY ("id", "book_id", "genre_id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "books" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "author_id" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_f3f2f25a099d24e12545b70b022" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "authors" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_d2ed02fabd9b52847ccb85e6b88" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "books_genres" ADD CONSTRAINT "FK_2016ec5bfe3fcbfedf6b419cbfa" FOREIGN KEY ("book_id") REFERENCES "books"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "books_genres" ADD CONSTRAINT "FK_b77b9383d2dab952085b78c6be9" FOREIGN KEY ("genre_id") REFERENCES "genres"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "books" ADD CONSTRAINT "FK_1056dbee4616479f7d562c562df" FOREIGN KEY ("author_id") REFERENCES "authors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "books" DROP CONSTRAINT "FK_1056dbee4616479f7d562c562df"`, undefined);
        await queryRunner.query(`ALTER TABLE "books_genres" DROP CONSTRAINT "FK_b77b9383d2dab952085b78c6be9"`, undefined);
        await queryRunner.query(`ALTER TABLE "books_genres" DROP CONSTRAINT "FK_2016ec5bfe3fcbfedf6b419cbfa"`, undefined);
        await queryRunner.query(`DROP TABLE "authors"`, undefined);
        await queryRunner.query(`DROP TABLE "books"`, undefined);
        await queryRunner.query(`DROP TABLE "books_genres"`, undefined);
        await queryRunner.query(`DROP TABLE "genres"`, undefined);
    }

}
