fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
        const artan = document.getElementById("artan")
        const azalan = document.getElementById("azalan")
        const fromAtoZ = document.getElementById("a-z")
        const fromZtoA = document.getElementById("z-a")

        renderUI(data)

        const siralamaPrice = (artma) => {
            data.sort((a, b) => {
                if (artma) {
                    return a.price - b.price
                } else {
                    return b.price - a.price
                }
            })
            renderUI(data)
        }

        const siralamaTitle = () => {
            data.sort((a, b) => {
                if (a.title < b.title) {
                    return -1
                } else if (a.title > b.title) {
                    return 1
                } else {
                    return 0
                }
            })
            renderUI(data)
        }

        artan.addEventListener("click", () => {
            siralamaPrice(true)
        })

        azalan.addEventListener("click", () => {
            siralamaPrice(false)
        })

        fromAtoZ.addEventListener("click", () => {
            siralamaTitle()
        })

        fromZtoA.addEventListener("click", () => {
            siralamaTitle()
            data.reverse()
            renderUI(data)
        })
    })

function renderUI(cards) {
    const list = document.getElementById("list")
    list.innerHTML = ""
    for (let i = 0; i < cards.length; i++) {
        list.innerHTML += `
        <div class="col-3">
            <div class="card" style="width: 18rem;">
                <img width="120px" src="${cards[i].image}" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${cards[i].title}</h5>
                    <p>Price: ${cards[i].price}$</p>
                    <p>${cards[i].description}</p>
                </div>
            </div>
        </div>
        `
    }
}
