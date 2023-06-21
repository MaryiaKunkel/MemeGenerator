
const form=document.querySelector('form');

const section = document.querySelector('section');
section.style.display='flex';
section.style.justifyContent='space-around';

const delText=document.createElement('div');

const deleteMeCover=document.createElement('div');
// section.append(deleteMeCover);
deleteMeCover.append(delText);

form.addEventListener('submit', function(e){
    e.preventDefault();

    function mouseoverImage(e) {
        div.style.filter='brightness(20%)';
        delText.innerText='DELETE ME';
        // section.style.position='relative';
        deleteMeCover.style.position='relative';
        deleteMeCover.style.zIndex = '1';
        delText.style.position='absolute';
        delText.style.width='800px';
        delText.style.height='800px';
        delText.style.top = '0';
        delText.style.left = '0';
        delText.style.transform = 'translate(-50%, -50%)';
        delText.style.fontFamily='Bebas Neue';
        delText.style.color='red';
        delText.style.fontSize='200px';
        delText.style.zIndex = '2';

    }

    function mouseoutImage(e) {
        div.style.filter='none';
        delText.innerText='';
    }

    const imageUrl=document.querySelector('input[id=image]').value;
    const topTextInput=document.querySelector('input[id=topTextInput]').value;
    const bottomTextInput=document.querySelector('input[id=bottomTextInput]').value;

    console.log(imageUrl)
    const submitButton=document.querySelector('input[id=submit]');

    const div = document.createElement('div');
    div.style.position='relative';
    div.style.margin='50px auto';
    div.style.padding='0';
    div.style.display='inline-block';
    div.style.justifyContent='space-around';

    div.append(deleteMeCover)

    const image = document.createElement('img');
    const section = document.querySelector('section');
    section.style.display='flex';
    section.style.justifyContent='space-around';

    image.addEventListener('mouseover', mouseoverImage)
    image.addEventListener('mouseout', mouseoutImage)

    const topText = document.createElement('div');
    topText.classList.add('topText');
    topText.innerText=topTextInput;
    topText.style.position='absolute';
    topText.style.top='0';
    topText.style.textAlign='center';
    topText.style.fontSize='70px';
    topText.style.color='white';
    topText.style.webkitTextStroke='3px  #000';
    topText.style.fontFamily='impact';
    topText.style.width='100%';
    topText.addEventListener('mouseover', mouseoverImage)


    const bottomText = document.createElement('div');
    bottomText.classList.add('bottomText');
    bottomText.innerText=bottomTextInput;
    bottomText.style.position='absolute';
    bottomText.style.bottom='0';
    bottomText.style.textAlign='center';
    bottomText.style.fontSize='70px';
    bottomText.style.color='white';
    bottomText.style.webkitTextStroke='3px  #000';
    bottomText.style.fontFamily='Impact';
    bottomText.style.width='100%';
    bottomText.addEventListener('mouseover', mouseoverImage)


    image.setAttribute('src', imageUrl);
    image.style.blockSize='800px';

    section.append(div);

    div.append(image);
    div.append(topText);
    div.append(bottomText);

    document.querySelector('input#topTextInput').value='';
    document.querySelector('input#bottomTextInput').value='';
    document.querySelector('input#image').value='';

});



