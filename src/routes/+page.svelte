<script>
    export let data;

    function getPokemonUrl(id) {
        return '/pokemon/' + id;
    }
</script>

<header>
    <h1 class="text-primary text-lg">Pokedex</h1>
</header>
<div class="container">
    {#each data.monsters as monster}
        <a href="{getPokemonUrl(monster.id)}">
            <div class="pokemon-item">
                <h1 class="title">{monster.id}: {monster.name}</h1>
                <img class="pokemon-img" src={monster.image} alt={monster.name}>
            </div>
        </a>
    {/each}
</div>

<style>
    header {
        width: 65ch;
        margin-inline: auto;
        text-align: center;
    }
    .container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        grid-template-columns: repeat(4, 1fr);
    }
    .pokemon-item {
        text-align: center;
        height: 100px;
        width: 100px;
        border: 1px solid white;
        margin: 0.5rem;
        padding: 1rem;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 1rem;
        box-shadow: 0 1px 7px rgba(255, 255, 255, 0.5);

        transition: background-color 0.1s ease;
        transition: box-shadow 0.2s ease;
    }
    .pokemon-item > * {
        background: none;
    }
    .pokemon-item:hover {
        background-color: var(--bg-secondary);
        box-shadow: 0 1px 10px rgba(255, 255, 255, 1.0);
    }
    .pokemon-item:hover > h1 {
        color: var(--text-primary);
    }
    .pokemon-img {
        max-width: 75%;
        background: none;
    }
    a {
        text-decoration: none;
    }
    .title {
        color: var(--text-secondary);
    }
</style>