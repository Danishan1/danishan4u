export const __db_types = {
  id_small: "CHAR(6)", // Short IDs (Organizations, Small Codes)
  id_medium: "CHAR(8)", // Medium IDs (User Groups, Small Services)
  id_large: "CHAR(10)", // Larger IDs (Users, Transactions)
  id_xlarge: "CHAR(12)", // Extended IDs (Sessions, Requests)
  id_xxlarge: "CHAR(14)", // Extended IDs (Rare Cases, Hierarchical)
  id_ultra: "CHAR(16)", // Universal IDs (User, Assets, Transactions)
  uuid_short: "CHAR(32)", // Unique Short Hash (MD5)
  uuid_long: "CHAR(36)", // Universal Unique Identifier (UUIDv4)

  // Integer Types
  tiny_int: "TINYINT", // 1 Byte (0-255) – Status, Flags, Small Counts
  small_int: "SMALLINT", // 2 Bytes (0-65,535) – Small Counters
  medium_int: "MEDIUMINT", // 3 Bytes (0-16M) – Medium Counters
  int: "INT", // 4 Bytes (Standard IDs, Counts)
  big_int: "BIGINT", // 8 Bytes (Large IDs, Finance, High Counts)

  // String/Text Types
  name_short: "VARCHAR(20)", // Short Names (Users, Products)
  name_long: "VARCHAR(50)", // Long Names (Descriptions, Full Names)
  title: "VARCHAR(100)", // Long Names (Descriptions, Full Names)
  short_desc: "VARCHAR(400)", // Long Names (Descriptions, Full Names)
  text255: "VARCHAR(255)", // Emails (Standard)
  phone: "VARCHAR(20)", // Phone Numbers (+1234567890)
  text: "TEXT", // Secure Hashed Passwords
  json: "JSON", // Store Dynamic Metadata

  // Date & Time Types
  created_at: "TIMESTAMP DEFAULT CURRENT_TIMESTAMP",
  updated_at: "TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP",
  date: "DATE", // Birthdate, Event Dates
  datetime: "DATETIME", // Precise Event Tracking
  create: "CREATE TABLE IF NOT EXISTS",
  auto_primary_key: "AUTO_INCREMENT PRIMARY KEY",
  decimal: "DECIMAL(10, 2)",

  // Boolean & Status Types
  bool: "BOOLEAN DEFAULT FALSE", // General Boolean
  status_enum: "TINYINT DEFAULT 0", // 0 = Pending, 1 = Active, 2 = Archived
};
