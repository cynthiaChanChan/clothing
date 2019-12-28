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

export const removeItemToArray = (items, itemToRemove) => {
    const existingItem = items.find(item => {
        return item.id === itemToRemove.id;
    });

    if (existingItem.quantity === 1) {
        return items.filter(item => item.id !== existingItem.id);
    } else if (existingItem.quantity > 1) {
        return items.map(item => {
            return item.id === existingItem.id ?
            {...item, quantity: item.quantity -1}
            : item;
        });
    }

    return items;

};