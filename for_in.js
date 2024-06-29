const name1={
    In:'India',
    ENG:'England',
    USA:'United states'

}

for (const key in name1) {
    console.log(`${key} is the shortcut for ${name1[key]}`);
}