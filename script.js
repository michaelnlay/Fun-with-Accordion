const accordionTitles = document.querySelectorAll('.accordion-title') //this line creates an array of accordion title of 3, if we have 6 then will be an array of 6

//this line is to iterate through each of those accordion title
accordionTitles.forEach((accordionTitle)=>{
    accordionTitle.addEventListener('click',()=>{
        const height = accordionTitle.nextElementSibling.scrollHeight;
        // console.log(height);
        
        accordionTitle.classList.toggle('active-header');
        if (accordionTitle.classList.contains('active-header')){
            accordionTitle.nextElementSibling.style.maxHeight = `${height}px`
        }else{accordionTitle.nextElementSibling.style.maxHeight = 0;

        }
    })
})