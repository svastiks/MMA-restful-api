async function fighters() {
    const res = await fetch(`mma-restful-api-production.up.railway.app/fighters`);
    const fighters = await response.json();
    console.log(fighters);
}