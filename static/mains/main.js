let s1="Tên sản phẩm"
let ct1="Cái tên brainchild là một suy nghĩ ngẫu hứng. Brainchild trong tiếng anh là phát minh  , sáng kiến, ý tưởng của một người nào đó thì từ đó nghe vừa hay mà cũng vừa hợp với sản phẩm của mình nên em đã chọn nó."
let s2="Playground"
let ct2="Brainchild là một website đa chức năng. Đầu tiên là khu vui chơi thì Brainchild đã lấy ý tưởng và cải tiến trò chơi mang tên oneline - nối các điểm trong sơ đồ lần lượt trong 1 lần. Trò chơi có 2 chế độ là cơ bản và speedrun, chơi cả 2 sẽ giúp người sử dụng có trải nghiệm đa dạng hơn."
let s3="Chatbot"
let ct3="Đồng thời trang web cũng được tích hợp 1 AI chatbot để tương tác, tâm sự, và trả lời các câu hỏi người dùng"
let s4="Hướng dẫn"
let ct4="Hãy nhấp vào chữ brainchild  ở góc trái màn hình để quay lại màn hình chính, nhấp vào playground để chơi trò chơi và nhấp vào chữ chatbot để được hướng sang khu vực tương tác với AI chatbot"
let id1=id2=id3=id4=0
let p1=document.querySelector('#p1')
let p2=document.querySelector('#p2')
let p3=document.querySelector('#p3')
let p4=document.querySelector('#p4')
p1.addEventListener('click',()=>
{
    id1=1-id1;
    if(id1==1)
    {
        p1.textContent=ct1
    }
    else
    {
        p1.textContent=s1
    }
})
p2.addEventListener('click',()=>
{
    id2=1-id2;
    if(id2==1)
    {
        p2.textContent=ct2
    }
    else
    {
        p2.textContent=s2
    }
})
p3.addEventListener('click',()=>
{
    id3=1-id3;
    if(id3==1)
    {
        p3.textContent=ct3
    }
    else
    {
        p3.textContent=s3
    }
})
p4.addEventListener('click',()=>
{
    id4=1-id4;
    if(id4==1)
    {
        p4.textContent=ct4
    }
    else
    {
        p4.textContent=s4
    }
})