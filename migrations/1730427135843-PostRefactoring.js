const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class PostRefactoring1730427135843 {

    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE IF NOT EXISTS phone (
	        phn_id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
            phn_number varchar(255) NOT NULL,
            std_id INTEGER NOT NULL,
            FOREIGN KEY (std_id) REFERENCES student(std_id)
        );`);

        await queryRunner.query(`CREATE TABLE IF NOT EXISTS course (
	        crs_id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
            crs_number varchar(255) NOT NULL,
            std_id INTEGER NOT NULL,
            FOREIGN KEY (std_id) REFERENCES student(std_id)
        );`);

        await queryRunner.query(
            `ALTER TABLE local.student DROP COLUMN std_phone_number;`,
        );
        await queryRunner.query(
            `ALTER TABLE local.student DROP COLUMN std_fst_choice;`,
        );
        await queryRunner.query(
            `ALTER TABLE local.student DROP COLUMN std_scd_choice;`,
        );
        await queryRunner.query(
            `ALTER TABLE local.student DROP COLUMN std_trd_choice;`,
        );     
    }

    async down(queryRunner) {
        await queryRunner.query(
            `ALTER TABLE local.student ADD std_phone_number varchar(255);`,
        );
        await queryRunner.query(
            `ALTER TABLE local.student ADD std_fst_choice varchar(255);`,
        );
        await queryRunner.query(
            `ALTER TABLE local.student ADD std_scd_choice varchar(255);`,
        );
        await queryRunner.query(
            `ALTER TABLE local.student ADD std_trd_choice varchar(255);`,
        );

        await queryRunner.query(`DROP TABLE IF EXISTS phone;`);
        
        await queryRunner.query(`DROP TABLE IF EXISTS course;`);
    }

}
