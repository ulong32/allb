export function val(element) {
    if (element.options && element.multiple) {
        return element.options
            .filter((option) => option.selected)
            .map((option) => option.value);
    } else {
        return element.value;
    }
}