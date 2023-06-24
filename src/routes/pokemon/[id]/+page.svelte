<script>
    import { onMount } from 'svelte';
    import { page } from '$app/stores'

    let id = null;
    id = $page.params.id;
    console.log(id);

    let pokemon;
    onMount(async () => {
        await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => response.json())
        .then(data => {
            pokemon = {
                name: data.name,
                image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png",
                type: data.types.map(type => type.type.name),
            }
        });

    });
    
</script>

{#if pokemon}
    <div class="container-grid">
        <div class="container-rows">
            
            <h1>Name: {pokemon.name}</h1>
            
            <h1 class="text-secondary">Type: {pokemon.type}</h1>
        </div>
        <div class="container">
            <img src={pokemon.image} alt={pokemon.name}>
        </div>
    </div>
    
{:else}
    <h1>loading ...</h1>
{/if}

<style>
    .container-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        place-items: center;
    }
    .container {
        display: flex;
        justify-content: center;
    }
    .container-rows {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>