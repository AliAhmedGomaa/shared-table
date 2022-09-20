export const generateColumnsHeaders = (columns: string[]): { label: string, value: string }[] => {

    const columnHeaders = [];

    for (const column of columns) {
        columnHeaders.push({ label: column, value: column })
    }

    return columnHeaders;
}