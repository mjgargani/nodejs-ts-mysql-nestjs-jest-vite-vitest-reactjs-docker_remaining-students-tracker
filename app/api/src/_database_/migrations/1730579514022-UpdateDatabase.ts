import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateDatabase1730579514022 implements MigrationInterface {
    name = 'UpdateDatabase1730579514022'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "development"."phone" DROP CONSTRAINT "phone_std_id_fkey"`);
        await queryRunner.query(`ALTER TABLE "development"."course" DROP CONSTRAINT "course_std_id_fkey"`);
        await queryRunner.query(`ALTER TABLE "development"."course" DROP COLUMN "phn_created_at"`);
        await queryRunner.query(`ALTER TABLE "development"."course" DROP COLUMN "phn_updated_at"`);
        await queryRunner.query(`ALTER TABLE "development"."course" ADD "crs_created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "development"."course" ADD "crs_updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "development"."student" DROP CONSTRAINT "student_pkey"`);
        await queryRunner.query(`ALTER TABLE "development"."student" DROP COLUMN "std_id"`);
        await queryRunner.query(`ALTER TABLE "development"."student" ADD "std_id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "development"."student" ADD CONSTRAINT "PK_70fb2903e6225b6aae48f0ee3a7" PRIMARY KEY ("std_id")`);
        await queryRunner.query(`ALTER TABLE "development"."student" DROP COLUMN "std_name"`);
        await queryRunner.query(`ALTER TABLE "development"."student" ADD "std_name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "development"."student" DROP COLUMN "std_series"`);
        await queryRunner.query(`ALTER TABLE "development"."student" ADD "std_series" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "development"."student" ALTER COLUMN "std_created_at" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "development"."student" ALTER COLUMN "std_created_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "development"."student" ALTER COLUMN "std_updated_at" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "development"."student" ALTER COLUMN "std_updated_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "development"."phone" DROP CONSTRAINT "phone_pkey"`);
        await queryRunner.query(`ALTER TABLE "development"."phone" DROP COLUMN "phn_id"`);
        await queryRunner.query(`ALTER TABLE "development"."phone" ADD "phn_id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "development"."phone" ADD CONSTRAINT "PK_f2d925ef2faf5dba619d7b675df" PRIMARY KEY ("phn_id")`);
        await queryRunner.query(`ALTER TABLE "development"."phone" DROP COLUMN "phn_number"`);
        await queryRunner.query(`ALTER TABLE "development"."phone" ADD "phn_number" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "development"."phone" ALTER COLUMN "phn_created_at" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "development"."phone" ALTER COLUMN "phn_created_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "development"."phone" ALTER COLUMN "phn_updated_at" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "development"."phone" ALTER COLUMN "phn_updated_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "development"."phone" DROP COLUMN "std_id"`);
        await queryRunner.query(`ALTER TABLE "development"."phone" ADD "std_id" uuid`);
        await queryRunner.query(`ALTER TABLE "development"."course" DROP CONSTRAINT "course_pkey"`);
        await queryRunner.query(`ALTER TABLE "development"."course" DROP COLUMN "crs_id"`);
        await queryRunner.query(`ALTER TABLE "development"."course" ADD "crs_id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "development"."course" ADD CONSTRAINT "PK_195ea22c5d090f2589b7d4118ac" PRIMARY KEY ("crs_id")`);
        await queryRunner.query(`ALTER TABLE "development"."course" DROP COLUMN "crs_name"`);
        await queryRunner.query(`ALTER TABLE "development"."course" ADD "crs_name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "development"."course" DROP COLUMN "std_id"`);
        await queryRunner.query(`ALTER TABLE "development"."course" ADD "std_id" uuid`);
        await queryRunner.query(`ALTER TABLE "development"."phone" ADD CONSTRAINT "FK_e5933ae07a89c5a11060aafd096" FOREIGN KEY ("std_id") REFERENCES "development"."student"("std_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "development"."course" ADD CONSTRAINT "FK_7c88e5d25ccae533d8e2c03fe10" FOREIGN KEY ("std_id") REFERENCES "development"."student"("std_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "development"."course" DROP CONSTRAINT "FK_7c88e5d25ccae533d8e2c03fe10"`);
        await queryRunner.query(`ALTER TABLE "development"."phone" DROP CONSTRAINT "FK_e5933ae07a89c5a11060aafd096"`);
        await queryRunner.query(`ALTER TABLE "development"."course" DROP COLUMN "std_id"`);
        await queryRunner.query(`ALTER TABLE "development"."course" ADD "std_id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "development"."course" DROP COLUMN "crs_name"`);
        await queryRunner.query(`ALTER TABLE "development"."course" ADD "crs_name" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "development"."course" DROP CONSTRAINT "PK_195ea22c5d090f2589b7d4118ac"`);
        await queryRunner.query(`ALTER TABLE "development"."course" DROP COLUMN "crs_id"`);
        await queryRunner.query(`ALTER TABLE "development"."course" ADD "crs_id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "development"."course" ADD CONSTRAINT "course_pkey" PRIMARY KEY ("crs_id")`);
        await queryRunner.query(`ALTER TABLE "development"."phone" DROP COLUMN "std_id"`);
        await queryRunner.query(`ALTER TABLE "development"."phone" ADD "std_id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "development"."phone" ALTER COLUMN "phn_updated_at" SET DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "development"."phone" ALTER COLUMN "phn_updated_at" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "development"."phone" ALTER COLUMN "phn_created_at" SET DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "development"."phone" ALTER COLUMN "phn_created_at" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "development"."phone" DROP COLUMN "phn_number"`);
        await queryRunner.query(`ALTER TABLE "development"."phone" ADD "phn_number" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "development"."phone" DROP CONSTRAINT "PK_f2d925ef2faf5dba619d7b675df"`);
        await queryRunner.query(`ALTER TABLE "development"."phone" DROP COLUMN "phn_id"`);
        await queryRunner.query(`ALTER TABLE "development"."phone" ADD "phn_id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "development"."phone" ADD CONSTRAINT "phone_pkey" PRIMARY KEY ("phn_id")`);
        await queryRunner.query(`ALTER TABLE "development"."student" ALTER COLUMN "std_updated_at" SET DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "development"."student" ALTER COLUMN "std_updated_at" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "development"."student" ALTER COLUMN "std_created_at" SET DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "development"."student" ALTER COLUMN "std_created_at" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "development"."student" DROP COLUMN "std_series"`);
        await queryRunner.query(`ALTER TABLE "development"."student" ADD "std_series" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "development"."student" DROP COLUMN "std_name"`);
        await queryRunner.query(`ALTER TABLE "development"."student" ADD "std_name" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "development"."student" DROP CONSTRAINT "PK_70fb2903e6225b6aae48f0ee3a7"`);
        await queryRunner.query(`ALTER TABLE "development"."student" DROP COLUMN "std_id"`);
        await queryRunner.query(`ALTER TABLE "development"."student" ADD "std_id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "development"."student" ADD CONSTRAINT "student_pkey" PRIMARY KEY ("std_id")`);
        await queryRunner.query(`ALTER TABLE "development"."course" DROP COLUMN "crs_updated_at"`);
        await queryRunner.query(`ALTER TABLE "development"."course" DROP COLUMN "crs_created_at"`);
        await queryRunner.query(`ALTER TABLE "development"."course" ADD "phn_updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "development"."course" ADD "phn_created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "development"."course" ADD CONSTRAINT "course_std_id_fkey" FOREIGN KEY ("std_id") REFERENCES "development"."student"("std_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "development"."phone" ADD CONSTRAINT "phone_std_id_fkey" FOREIGN KEY ("std_id") REFERENCES "development"."student"("std_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
