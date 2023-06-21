
const form=document.querySelector('form');

const section = document.querySelector('section');
section.style.display='flex';
section.style.flexWrap = 'wrap';
section.style.justifyContent='space-around';

const imageUrl=document.querySelector('input[id=image]').value;
const topTextInput=document.querySelector('input[id=topTextInput]').value;
const bottomTextInput=document.querySelector('input[id=bottomTextInput]').value;



form.addEventListener('submit', function(e) {
    e.preventDefault();

    const imageUrl=document.querySelector('input[id=image]').value;
    const topTextInput=document.querySelector('input[id=topTextInput]').value;
    const bottomTextInput=document.querySelector('input[id=bottomTextInput]').value;

    if (imageUrl==='' || topTextInput==='' || bottomTextInput===''){
        alert('Check if you filled up all the input areas');
    } else {

    const meme = document.createElement('div');
    meme.style.position='relative';
    meme.style.margin='50px auto';
    meme.style.padding='0';
    meme.style.display='flex';
    meme.style.display='inline-block';
    meme.style.justifyContent='space-around';

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

    const image = document.createElement('img');
    image.setAttribute('src', imageUrl);
    image.style.blockSize='800px';

    const deleteMeText=document.createElement('div');
    deleteMeText.style.opacity='0';

    meme.append(deleteMeText);
    // meme.addEventListener('mouseover', function(e){
    function mouseOver(e){
        image.style.filter='brightness(50%)';
        topText.style.filter='brightness(50%)';
        bottomText.style.filter='brightness(50%)';
        deleteMeText.style.opacity='1';
        deleteMeText.style.transition='opacity 2s';

        meme.style.position='relative';
        deleteMeText.style.position='absolute';

        deleteMeText.innerText='DELETE ME';
        deleteMeText.style.width='800px';
        deleteMeText.style.height='800px';
        deleteMeText.style.fontFamily='Bebas Neue';
        deleteMeText.style.color='red';
        deleteMeText.style.fontSize='200px';
        deleteMeText.style.top='300px';
        deleteMeText.style.left='150px';
        deleteMeText.style.zIndex='2';
        image.style.transition='filter 2s';
        topText.style.transition='filter 2s';
        bottomText.style.transition='filter 2s';

    }

    function mouseOut(e){
        image.style.filter='none';
        topText.style.filter='none';
        bottomText.style.filter='none';
        deleteMeText.style.opacity='0';
        deleteMeText.style.transition='opacity 2s';

    }

    deleteMeText.addEventListener('click', function(e){
        meme.remove();
    })

    meme.addEventListener('mouseover', mouseOver);
    meme.addEventListener('mouseout', mouseOut);
    deleteMeText.addEventListener('mouseover', mouseOver);
    deleteMeText.addEventListener('mouseout', mouseOut);

    section.append(meme);
    meme.append(image);
    meme.append(topText);
    meme.append(bottomText);

    document.querySelector('input#topTextInput').value='';
    document.querySelector('input#bottomTextInput').value='';
    document.querySelector('input#image').value='';
}
})

