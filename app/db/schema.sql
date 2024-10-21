CREATE TABLE IF NOT EXISTS student (
    student_id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    student_name VARCHAR(255) NOT NULL,
    student_current_age INTEGER NOT NULL,
    student_email VARCHAR(255) NOT NULL,
    student_phone_number VARCHAR(255) NOT NULL,
    student_created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    student_updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);