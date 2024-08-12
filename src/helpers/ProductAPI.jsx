const getProducts = async (_category,_limit,_id) => {
    try {
        const res = await fetch(`https://fakestoreapi.com/products${"/"+_id}${"/"+_category}${"?limit="+_limit}`, {mode: "cors"})
        const data = await res.json()
        return data
    } catch(err) {
        console.error(err)
    }
}

export default getProducts