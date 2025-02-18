const getUser = new Promise((resolve, reject) => {
    const success = true
    const user = {
        id: 1,
        username: "hahahihi",
    }
    setTimeout(() => {
        if(success) return resolve(user)
        reject(new Error("terjadi kesalahan di getUser"))
    }, 1000)
})
const getWishlistFromUser = (username) => {
    return new Promise((resolve, reject) => {
        if (username !== "string") return reject (new Error("terjadi kesalahan di getWishlistFromUser"))
        const success = true
        const wishlist = [
            {
                id: 1,
                product: "product 1",
                harga: 5000,
                qty: 10,
            },
            {
                id: 2,
                product: "product 2",
                harga: 50000,
                qty: 2,
            },
        ]
        setTimeout(() => {
            if (success) return resolve (wishlist)
            reject (new Error("terjadi kesalahan di wishlist"))
        }, 1000)
    })
}
const getTotalPurchase = (wishlistProduct) => {
    if (!(wishlistProduct instanceof Array)) return
    wishlistProduct.forEach((el) => {
        const totalPch = (el.harga)*(el.qty)
    })
}

const grandTotal = async function() {
    try {
        const user = await getUser
        const {id} = user
        if (typeof id !== "number") throw new Error("id has wrong type")
        const wishlist = await getWishlistFromUser(username)
        wishlist.forEach((el) => {
            const {harga, qty} = el
            console.log(`${totalPch}`)
        })
    } catch (error) {
        console.log(error.message)
    }
}
grandTotal()
