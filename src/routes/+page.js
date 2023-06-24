export async function load({fetch}) {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    const json = await response.json()
    const monsters = json.results.map((monster) => {
        const split_url = monster.url.split('/')
        const id = split_url[split_url.length - 2];
        return {
            name: monster.name,
            url: monster.url,
            id,
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png"
        }
    })

    return {
        monsters: monsters
    }
}