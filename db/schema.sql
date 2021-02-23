DROP DATABASE IF EXISTS dnd_DB;

CREATE DATABASE dnd_DB;

USE dnd_DB;

CREATE TABLE dnd_DB (
	id INT AUTO_INCREMENT,
	PRIMARY KEY (id)
);

CREATE TABLE char_base_info (
	char_id INT AUTO_INCREMENT,
    player_name VARCHAR(100),
    char_name VARCHAR(100),
    char_age INT,
    char_height INT,
    char_weight INT,
    char_eyes VARCHAR(100),
    char_skin VARCHAR(100),
    char_hair VARCHAR(100),
    char_strength INT,
    char_dexterity INT,
    char_constitution INT,
    char_intelligence INT,
    char_wisdom INT,
    char_charisma INT,
    char_class VARCHAR(100),
    char_level INT,
    char_background VARCHAR(100),
	char_race VARCHAR(100),
	exp_point INT,
    FOREIGN KEY(char_id)
		REFERENCES dnd_DB(id)
        ON DELETE CASCADE
);

CREATE TABLE char_sub_info (
	char_id_sub INT AUTO_INCREMENT,
	char_speed INT,
    char_initiative VARCHAR(100),
    char_hp INT,
    char_temp_hp INT,
    char_hit_dice INT,
    char_deathsaves_successes INT,
    char_deathsaves_failure INT,
    char_personality_traits VARCHAR(100),
    char_ideals VARCHAR(100),
    char_bonds VARCHAR(100),
    char_flaws VARCHAR(100),
    char_features_traits VARCHAR(100),
    char_proficiencies_languages VARCHAR(100),
    FOREIGN KEY(char_id_sub)
		REFERENCES dnd_DB(id)
        ON DELETE CASCADE
);

CREATE TABLE char_equipment (
	char_id_equipment INT AUTO_INCREMENT,
    char_equipment_cp VARCHAR(100),
    char_equipment_sp VARCHAR(100),
    char_equipment_ep VARCHAR(100),
    char_equipment_gp VARCHAR(100),
    char_equipment_pp VARCHAR(100),
    FOREIGN KEY(char_id_equipment)
		REFERENCES dnd_DB(id)
        ON DELETE CASCADE
);

CREATE TABLE char_skills (
	char_id_skills INT AUTO_INCREMENT,
    char_acrobatics INT,
    char_animal_handling INT,
    char_arcana INT,
    char_athletics INT,
    char_deception INT,
    char_history INT,
    char_insight INT,
    char_intimidation INT,
    char_investigation INT,
    char_medicine INT,
    char_nature INT,
    char_perception INT,
    char_passive_wisdom INT,
    char_performance INT,
    char_persuasion INT,
    char_religion INT,
    char_sleight_of_hand INT,
    char_stealth INT,
    char_survival INT,
	FOREIGN KEY(char_id_skills)
		REFERENCES dnd_DB(id)
        ON DELETE CASCADE
);

SELECT *
FROM dnd_DB
RIGHT JOIN (char_base_info, char_sub_info, char_equipment, char_skills)
ON (dnd_DB.id = char_base_info.char_id AND dnd_DB.id = char_sub_info.char_id_sub AND dnd_DB.id = char_equipment.char_id_equipment AND dnd_DB.id = char_skills.char_id_skills)