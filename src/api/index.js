

const apiurl = `https://jsonplaceholder.typicode.com/posts/`

const fetchPosts = async () => {
    const response = await fetch(apiurl);
   
    const data = await response.json();

    console.log("response",data)



    if(response === {}) {
        throw new Error("Invalid Url")
    }

    return data
}

export {fetchPosts}