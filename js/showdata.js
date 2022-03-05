const getdata = async (api) => {
    try {
        let res = await fetch(api)
        let data = await res.json()
        return data
    } catch (err) { 
        console.log("api-error:",err.message)
    }
}

let { hits} = await getdata("https://pixabay.com/api/?key=25998297-9ea7f81fe4d66b005b332525b")
console.log(hits)
let container = document.querySelector(".containar");
function showData1(loacation,data) { 
    data.foreach((e) => { 
        // let img = document.createComment
    })
}
