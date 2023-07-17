let boxchat=document.querySelector('.chatboxbody')
let input=document.querySelector('.chat')
let click=0
function aduser(text)
{
    let chat=document.createElement('p')
    let area=document.createElement('div')
    let name=document.createElement('h3')
    boxchat.appendChild(area)
    area.appendChild(name)
    area.appendChild(chat)
    name.textContent='You'
    chat.textContent=text
    name.style.fontFamily='Monospace'
    chat.style.color='black'
    chat.style.fontFamily='Monospace'
    area.style.backgroundColor='wheat'
}
function adbot(text)
{
    fetch("http://127.0.0.1:5000/get", 
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
        body:JSON.stringify(text)})
        .then(res=>{
                if(res.ok){
                    return res.json()
                }else{
                    alert("something is wrong")
                }
            }).then(json=>{
                let chat=document.createElement('p')
                let area=document.createElement('div')
                let name=document.createElement('h3')
                boxchat.appendChild(area)
                area.appendChild(name)
                area.appendChild(chat)
                name.textContent='Bot'
                chat.textContent=json.res
                name.style.fontFamily='Monospace'
                chat.style.color='black'
                chat.style.fontFamily='Monospace'
                area.style.backgroundColor='pink'
                input.value=''
                input.disabled=false
                button.disabled=false
                click=0
            }).catch((err) => console.error(err));
}
button=document.querySelector('.send')
button.addEventListener('click',()=>{
    if(input.value=='')
        return
    aduser(input.value)
    let inputval={'input':input.value}
    input.disabled=true
    button.disabled=true
    adbot(inputval)
})

document.addEventListener('keydown',function(event) {
    if (event.code === 'Enter') {
        if(click==0)
        {
            if(input.value=='')
                return
            click=1
            aduser(input.value)
            let inputval={'input':input.value}
            input.disabled=true
            button.disabled=true
            adbot(inputval)
        }
    }
})

