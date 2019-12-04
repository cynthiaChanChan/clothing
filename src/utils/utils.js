export const addItemToArray = (items, itemToAdd) => {
    const existingItem = items.find(item => {
        return item.id === itemToAdd.id;
    });

    if (existingItem) {
        return items.map(item => {
            return item.id === existingItem.id ?
            {...item, quantity: item.quantity + 1}
            : item;
        });
    }

    return [...items, {...itemToAdd, quantity: 1}];
};