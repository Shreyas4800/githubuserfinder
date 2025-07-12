



function getprofiledata(username){
    return fetch(`https://api.github.com/users/${username}`).then ((raw) => {
        if (!raw.ok) throw new Error ("USERNAME NOT FOUND!!")
        return raw.json();

    });
}


function getrepos(username){
    return fetch(`https://api.github.com/users/${username}/repo?sort=updated`).then(raw => {
        if(!raw.ok) throw new Error ("Something went wrong");
        return raw.json();
    })

}

// getprofiledata("async").then(function(data){

// })


let searchbtn = document.querySelector(".search")
searchbtn.addEventListener("click",function(){
    let username = usernameinp.value.trim();

    if(username.length >0){
        getprofiledata(username).then(data => {
            decorateprofile(data);

        });

    }else{
        alert();
    }
})
 
let usernameinp = document.querySelector(".usernameinp")
let card = document.querySelector(".card")

function decorateprofile(details){

    let data = `<img src="${details.avatar_url}" alt="User Avatar"
                class="w-24 h-24 rounded-full border-2 border-blue-500 object-cover transition-transform duration-300 hover:scale-105 hover:shadow-xl" />

            <div class="flex-1 space-y-2">
                <h2 class="text-2xl font-semibold">${details.name}</h2>
                <p class="text-gray-400 text-sm">@${details.login}</p>
                <p class="text-sm mt-2 text-gray-300">
                    ${details.bio ? details.bio : ""}
                </p>

                <div class="flex flex-wrap gap-4 mt-4 text-sm text-gray-300">
                    <div>
                        <span class="font-semibold text-white">Public Repos:</span> ${details.public_repos}
                    </div>
                    <div>
                        <span class="font-semibold text-white">Followers:</span> ${details.followers}
                    </div>
                    <div>
                        <span class="font-semibold text-white">Following:</span> ${details.following}
                    </div>
                    <div>
                        <span class="font-semibold text-white">Location:</span> ${details.location}
                    </div>
                    <div>
                        <span class="font-semibold text-white">Company:</span> ${details.company ? details.company : "N/A"}
                    </div>
                    <div>
                        <span class="font-semibold text-white">Blog:</span>
                        <a href="#" class="text-blue-400 hover:underline"
                            target="_blank">${details.blog}</a>
                    </div>
                </div>
            </div>`;


            card.innerHTML = data;

}