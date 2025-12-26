export const validateAgainstSchema = (inputConfig, schema, path = "") => {
  const validatedConfig = {};

  for (const key in schema) {
    const rule = schema[key];
    const value = inputConfig[key];
    const currentPath = path ? `${path}.${key}` : key;

    // Handle required fields
    if (rule.required && (value === undefined || value === null)) {
      throw new Error(`Configuration error: '${currentPath}' is required.`);
    }

    // Apply default if not present
    let finalValue = value !== undefined ? value : rule.default;

    // Validate types
    if (finalValue !== undefined && finalValue !== null) {
      const expectedType = rule.type;

      if (expectedType === "array") {
        if (!Array.isArray(finalValue)) {
          throw new Error(
            `Configuration error: '${currentPath}' must be an array.`
          );
        }
      } else if (expectedType === "object") {
        if (typeof finalValue !== "object" || Array.isArray(finalValue)) {
          throw new Error(
            `Configuration error: '${currentPath}' must be an object.`
          );
        }
      } else if (typeof finalValue !== expectedType) {
        throw new Error(
          `Configuration error: '${currentPath}' must be a ${expectedType}.`
        );
      }
    }

    // Validate allowed values
    if (rule.allowed && !rule.allowed.includes(finalValue)) {
      throw new Error(
        `Configuration error: '${currentPath}' must be one of: ${rule.allowed.join(
          ", "
        )}.`
      );
    }

    // Validate nested schema
    if (rule.type === "object" && rule.schema) {
      finalValue = validateAgainstSchema(
        finalValue || {},
        rule.schema,
        currentPath
      );
    }

    validatedConfig[key] = finalValue;
  }

  return validatedConfig;
};
