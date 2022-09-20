
export const convertClassToColumnsNames = (currentType: any): string[] => {
    const props = new currentType();
    return Object.keys(props)
}

