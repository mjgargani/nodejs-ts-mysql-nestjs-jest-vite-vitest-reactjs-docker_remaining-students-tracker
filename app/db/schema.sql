CREATE TABLE IF NOT EXISTS student (
    std_id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    std_name VARCHAR(255) NOT NULL,
    std_phone_number VARCHAR(255) NOT NULL,
    std_series VARCHAR(255) NOT NULL,
    std_nps INTEGER NOT NULL,
    std_fst_choice VARCHAR(255) NOT NULL,
    std_scd_choice VARCHAR(255) NOT NULL,
    std_trd_choice VARCHAR(255) NOT NULL,
    std_created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    std_updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);