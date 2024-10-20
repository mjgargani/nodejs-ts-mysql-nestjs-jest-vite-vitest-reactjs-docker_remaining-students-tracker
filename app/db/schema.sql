-- Criar uma tabela chamada "students" com os seguintes campos: id, name, email, ra, current_age, created_at, updated_at --
CREATE TABLE IF NOT EXISTS students (
    student_id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    student_name VARCHAR(255) NOT NULL,
    student_email VARCHAR(255) NOT NULL,
    student_current_age INTEGER NOT NULL,
    student_created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    student_updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);