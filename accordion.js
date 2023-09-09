function accord()
{
    const textbox = document.querySelectorAll(".textbox");
    textbox.forEach((item, index) => {
        let header = item.querySelector("header");
        header.addEventListener("click", () => {
            item.classList.toggle("open");

            let desc = item.querySelector(".desc");
            if(item.classList.contains("open"))
            {
                desc.style.height = `${desc.scrollHeight}px`;
                item.querySelector(".btn").classList.replace("+", "-");
            }else
            {
                desc.style.height = "0px";
                item.querySelector(".btn").classList.replace("-", "+");
            }
            console.log(desc);
        })
    })
}