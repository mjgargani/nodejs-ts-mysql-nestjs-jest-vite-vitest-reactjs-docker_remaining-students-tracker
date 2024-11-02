import { MigrationInterface, QueryRunner } from "typeorm";

const schema = process.env.NODE_ENV || 'development';

export class UpdateDatabase1730500540652 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`SET search_path TO ${schema};`);

    await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS student (
        std_id SERIAL PRIMARY KEY,
        std_name VARCHAR(255) NOT NULL,
        std_series VARCHAR(255) NOT NULL,
        std_nps INTEGER NOT NULL,
        std_created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        std_updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );`
    );
    
    await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS phone (
        phn_id SERIAL PRIMARY KEY,
        phn_number varchar(255) NOT NULL,
        phn_created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        phn_updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        std_id INTEGER NOT NULL,
        FOREIGN KEY (std_id) REFERENCES student(std_id)
      );`
    );

    await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS course (
        crs_id SERIAL PRIMARY KEY,
        crs_name varchar(255) NOT NULL,
        phn_created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        phn_updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        std_id INTEGER NOT NULL,
        FOREIGN KEY (std_id) REFERENCES student(std_id)
      );
    `);
  }
  
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`SET search_path TO ${schema};`);
    
    for (const table of ['student', 'phone', 'course']) {
      await queryRunner.query(`DROP TABLE IF EXISTS ${table} CASCADE;`);
    }
  }
}
