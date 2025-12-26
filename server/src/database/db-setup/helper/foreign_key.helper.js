export const foreign_key = (
  column,
  referenceTable,
  referencingColumn,
  onDelete
) =>
  `FOREIGN KEY (${column}) REFERENCES ${referenceTable}(${referencingColumn}) ON DELETE ${onDelete}`;
