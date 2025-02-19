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
        if (typeof username !== "string") return reject (new Error("terjadi kesalahan di getWishlistFromUser"))
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
    let totalPurchase = 0
    wishlistProduct.forEach((el) => 
        totalPurchase += (el.harga)*(el.qty)
    )
    let disc = 0
    if (totalPurchase >= 500000 && totalPurchase <= 1000000) {
        disc = 0.05
    } else if (totalPurchase > 1000000) {
        disc = 0.1
    }
    return {totalPurchase, disc}
}

const grandTotal = async function() {
    try {
        const user = await getUser
        const wishlist = await getWishlistFromUser(user.username)
        const {totalPurchase, disc} = getTotalPurchase(wishlist)
        console.log(`Total pembelian: ${totalPurchase}
Diskon: ${disc*100}%
Grand total: ${totalPurchase-(disc*totalPurchase)}`)
    } catch (error) {
        console.log(error.message)
    }
}
grandTotal()
