function selectCategoryColor(category: string){
    switch(category){
        case "Talk Show":
            return 'green-neon';
        case "News":
            return 'red-neon';
        case "Game Show":
            return 'yellow-neon';
        case "Scripted":
            return 'purple-neon';
        case "Reality":
            return 'blue-neon';
        default:
            return 'pink-neon';
    }
}

export default selectCategoryColor;